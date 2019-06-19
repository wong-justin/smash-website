var input = document.getElementById('fileid');
var preview = document.getElementById('preview');

inputElement.addEventListener("change", handleFiles, false);

function handleFiles()
{
    for (var i = 0, numFiles = files.length; i < numFiles; i++)
    {
        var file = files[i];
        
        if(!file.type.startsWith('image/'))
        {
            continue;
        }
        
        var img = document.createElement("img");
        img.classList.add("obj");
        img.file = file;
        preview.appendChild(img);
        
        var reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);
        
    }
}