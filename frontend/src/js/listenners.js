const $dir = 'http://localhost/LeyberProject/PHP-fileSystem/root';

//requiring path and fs modules
const path = required('path');
const fs = required('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});

let testArray = []
console.log('hello')
console.log($dir)
//$files = scandir($dir);
//console.log($files)
//First we need to get the array of the content of the folder
const mapFolders = testArray.map(function(file){
    file.addEventListener('click', function() {
        //It will affect different parts
        //It will update the relative path

        //It will display the info in the .folders-info
        //if the element clicked is a file
            //It will update the info but not open the file or modify the the wrapper-root second child
        //If the element is a folder
            //it will update the info and update the wrapper-roots second child
    })

    file.addEventListener('dblclick', function() {
        //On double click will affect as follows
        //If it is a file
            //it will open the file
        //If it is a folder
            //It will make folder the one displayed on the first child of the wrapper-roots element
            //It will make the content of the folder displayed in the second child of the wrapper-roots div.
    
    })

})