function handleFileSelect(event) {
    const file = event.target.files[0];
    const maxFileSize = 10 * 1024 * 1024;
    checkAuthentication()
        .then(isAuthenticated => {
            if (!isAuthenticated && file.size > maxFileSize) {
                window.location.href = "/login";
                return;
            }
            handleFile(file);
        })
        .catch(error => {
            console.error('There was a problem with the axios operation:', error);
            window.location.href = "/errors";
        });
}

function handleFileDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const maxFileSize = 10 * 1024 * 1024;
    checkAuthentication()
        .then(isAuthenticated => {
            if (!isAuthenticated && file.size > maxFileSize) {
                window.location.href = "/login";
                return;
            }
            handleFile(file);
        })
        .catch(error => {
            console.error('There was a problem with the axios operation:', error);
            window.location.href = "/errors";
        });
}

function handleFile(file) {
    var supportedFormats = ['JPEG', 'PNG', 'GIF', 'BMP', 'WAV', 'MP3'];

    if (!supportedFormats.includes(file.type.split('/')[1].toUpperCase())) {
        document.getElementById('unsup').style.display = 'block';
    }
    else {
        document.getElementById('fileName').innerText = `${file.name}`;
        document.getElementById('fileSize').innerText = `${(file.size * 0.0000010).toFixed(2)}MB`;
        document.getElementById('fileFormat').innerText = `${file.type.split('/')[0]}`;

        document.getElementById('unsup').style.display = 'none';
        document.getElementById('zone').style.display = 'none';
        document.getElementById('converterPanel').style.display = 'block';

        let conversionFormats;
        switch (file.type.split('/')[0]) {
            case 'image':
                conversionFormats = ['JPEG', 'PNG', 'GIF', 'BMP'];
                break;
            case 'audio':
                conversionFormats = ['WAV', 'MP3'];
                break;
            default:
                conversionFormats = [];
                break;
        }

        const selectElement = document.getElementById('formatSelect');
        selectElement.innerHTML = '';

        conversionFormats.forEach(format => {
            const option = document.createElement('option');
            option.value = format;
            option.textContent = format;
            selectElement.appendChild(option);
        });
    }
}

document.getElementById('convertButton').addEventListener('click', function() {
    const file = document.getElementById('fileInput').files[0];
    const newFormat = document.getElementById('formatSelect').value;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_type', newFormat);

    axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        responseType: 'blob'
    })
    .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', `converted.${newFormat.toLowerCase()}`);
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);

        document.getElementById('zone').style.display = 'none';
        document.getElementById('converterPanel').style.display = 'none';
        const gifImage = document.getElementById('comfirmGif');
        gifImage.style.display = 'block';

        setTimeout(() => {
            window.location.href = "/converter";
        }, 1200);
    })
    .catch(error => {
        console.error(error);
        window.location.href = "/errors";
    });
});

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function() {
    console.log('Connected to WebSocket server');
};

socket.onmessage = function(event) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = event.data;

    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 5000);
};

socket.onerror = function(error) {
    console.error('WebSocket error: ', error);
    window.location.href = "/errors";
};

function sendMessage(message) {
    socket.send(message);
}

function checkAuthentication() {
    return axios.get('/check-auth')
        .then(response => {
            return response.data.authenticated;
        })
        .catch(error => {
            console.error('There was a problem with the axios operation:', error);
            return false;
        });
}