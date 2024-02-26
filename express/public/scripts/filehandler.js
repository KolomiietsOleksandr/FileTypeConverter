function handleFileSelect(event) {
    const file = event.target.files[0];

    document.getElementById('fileName').innerText = `${file.name}`;
    document.getElementById('fileSize').innerText = `${(file.size * 0.0000010).toFixed(2)}MB`;
    document.getElementById('fileFormat').innerText = `${file.type.split('/')[0]}`;

    document.getElementById('zone').style.display = 'none';
    document.getElementById('converterPanel').style.display = 'block';

    let conversionFormats;
    switch (file.type.split('/')[0]) {
        case 'image':
            conversionFormats = ['JPEG', 'PNG', 'GIF', 'BMP'];
            break;
        case 'application':
            conversionFormats = ['PDF', 'DOCX', 'TXT', 'RTF'];
            break;
        case 'video':
            conversionFormats = ['MP4', 'GIF', 'AVI', 'MOV'];
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

function handleFileDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    document.getElementById('fileName').innerText = `${file.name}`;
    document.getElementById('fileSize').innerText = `${(file.size * 0.0000010).toFixed(2)}MB`;
    document.getElementById('fileFormat').innerText = `${file.type.split('/')[0]}`;

    document.getElementById('zone').style.display = 'none';
    document.getElementById('converterPanel').style.display = 'block';

    let conversionFormats;
    switch (file.type.split('/')[0]) {
        case 'image':
            conversionFormats = ['JPEG', 'PNG', 'GIF', 'BMP'];
            break;
        case 'application':
            conversionFormats = ['PDF', 'DOCX', 'TXT', 'RTF'];
            break;
        case 'video':
            conversionFormats = ['MP4', 'GIF', 'AVI', 'MOV'];
            break;
        case 'audio':
            conversionFormats = ['WAV', 'MP3'];
            break;
        default:
            conversionFormats = ['None'];
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
    })
    .catch(error => {
        console.error(error);
    });
});


