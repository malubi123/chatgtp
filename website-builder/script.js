document.getElementById('editor-text').addEventListener('input', function () {
    const content = this.value;
    document.getElementById('preview-content').innerHTML = content;
});

document.getElementById('upload-image').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('preview-content').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('add-link').addEventListener('click', function () {
    const url = document.getElementById('link-url').value;
    if (url) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = 'Click Here';
        link.target = '_blank';
        document.getElementById('preview-content').appendChild(link);
    }
});

document.getElementById('add-iframe').addEventListener('click', function () {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://example.com'; // Możesz umożliwić użytkownikowi wprowadzenie własnego URL
    iframe.width = '600';
    iframe.height = '400';
    document.getElementById('preview-content').appendChild(iframe);
});

document.getElementById('add-3d-model').addEventListener('click', function () {
    const modelViewer = document.createElement('model-viewer');
    modelViewer.src = '3d-models/model.glb'; // Dodaj swój model 3D
    modelViewer.alt = '3D Model';
    modelViewer.auto-rotate = true;
    modelViewer.camera-controls = true;
    modelViewer.width = '600';
    modelViewer.height = '400';
    document.getElementById('preview-content').appendChild(modelViewer);
});

document.getElementById('add-form').addEventListener('click', function () {
    const form = document.createElement('form');
    form.innerHTML = `
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
    `;
    document.getElementById('preview-content').appendChild(form);
});
