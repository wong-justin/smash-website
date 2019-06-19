/* probably not needed if using php script */

function setup() {

    var input = document.getElementById('fileid');
    var preview = document.getElementById('preview');
    
    input.addEventListener('change', updateImageDisplay);
    
    
    
    function updateImageDisplay() {
        
    while(preview.firstChild)
    {
        preview.removeChild(preview.firstChild);
    }


    
    var curFiles = input.files;
    
    if(curFiles.length === 0)
    {
        var pgraph = document.createElement('p');
        pgraph.textContent = 'No files currently selected for upload';
        preview.appendChild(para);     
    }
    else
    {
        var list = document.createElement('ol');
        preview.appendChild(list);
        
        for(var i=0; i < curFiles.length; i++)
        {
            var listItem = document.createElement('li');
            var pgraph = document.createElement('p');
            
//            if(validFileType(curFiles[i]))
            {
                pgraph.textContent = 'File name ' + 
                    curFiles[i].name + 
                    ', file size ' + 
                    returnFileSize(curFiles[i].size + 
                    '.');
                
                var image = document.createElement('img');
                image.src = window.URL.createObjectURL(curFiles[i]);
                
                listItem.appendChild(image);
                listItem.appendChild(pgraph);
            }
//            else
//            {
//                pgraph.textContent = 'File name ' + 
//                    curFiles[i].name + 
//                    ': Not a valid file type. Update your selection.';
//                listItem.appendChild(para);
//            }
            
            list.appendChild(listItem);
        }
    }
    }
    
    
    function returnFileSize(number) {
          if(number < 1024) {
            return number + 'bytes';
          } else if(number > 1024 && number < 1048576) {
            return (number/1024).toFixed(1) + 'KB';
          } else if(number > 1048576) {
            return (number/1048576).toFixed(1) + 'MB';
          }
        }
}