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
}

function handleFileDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    document.getElementById('fileName').innerText = `${file.name}`;
    document.getElementById('fileSize').innerText = `${(file.size * 0.0000010).toFixed(2)}MB`;
    document.getElementById('fileFormat').innerText = `${file.type.split('/')[0]}`;

    document.getElementById('zone').style.display = 'none';
    document.getElementById('converterPanel').style.display = 'block';
}
