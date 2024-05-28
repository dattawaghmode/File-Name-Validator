function GetFileSizeNameAndType()
        {
	 var fi = document.getElementById('fileinput1');	
        // GET THE FILE INPUT AS VARIABLE.

        var totalFileSize = 0;
		
        // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
        if (fi.files.length > 0)
        {	
            // RUN A LOOP TO CHECK EACH SELECTED FILE.
            for (var i = 0; i <= fi.files.length - 1; i++)
            {
                //ACCESS THE SIZE PROPERTY OF THE ITEM OBJECT IN FILES COLLECTION. IN THIS WAY ALSO GET OTHER PROPERTIES LIKE FILENAME AND FILETYPE
               var fsize = fi.files.item(i).size;
                totalFileSize = totalFileSize + fsize;
                document.getElementById('fp').innerHTML =
                
                +
                '<br /> ' + 'File Name: <b>' + fi.files.item(i).name
                +
                '</b> <br>File Size: <b>' + Math.round((fsize / 1024)) //DEFAULT SIZE IS IN BYTES SO WE DIVIDING BY 1024 TO CONVERT IT IN KB
                +
                '</b> KB <br>File Type: <b>' + fi.files.item(i).type + "</b>.";
		
			
            }
        }
        document.getElementById('divTotalSize').innerHTML = "Total File(s) Size is <b>" + Math.round(totalFileSize / 1024) + "</b> KB";
}




function GetFileSizeNameAndType1()
	{
        var fi = document.getElementById('fileinput2'); // GET THE FILE INPUT AS VARIABLE.

      var totalFileSize = 0;

        // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
        if (fi.files.length > 0)
        {
            // RUN A LOOP TO CHECK EACH SELECTED FILE.
            for (var j = 0; j <= fi.files.length - 1; j++)
            {
                //ACCESS THE SIZE PROPERTY OF THE ITEM OBJECT IN FILES COLLECTION. IN THIS WAY ALSO GET OTHER PROPERTIES LIKE FILENAME AND FILETYPE
            var fsize = fi.files.item(j).size;
                totalFileSize = totalFileSize + fsize;
                document.getElementById('fp1').innerHTML =
                
                +
                '<br /> ' + 'File Name: <b>' + fi.files.item(j).name
                +
                '</b> <br>File Size: <b>' + Math.round((fsize / 1024)) //DEFAULT SIZE IS IN BYTES SO WE DIVIDING BY 1024 TO CONVERT IT IN KB
                +
                '</b> KB <br>File Type: <b>' + fi.files.item(j).type + "</b>.";
            }
        }
        document.getElementById('divTotalSize1').innerHTML = "Total File(s) Size is <b>" + Math.round(totalFileSize / 1024) + "</b> KB";
  
}

function validate()
{
const fileinput1 = document.getElementById('fileinput1'); 
const fileinput2 = document.getElementById('fileinput2'); 


if(fileinput1.files.length > 0 && fileinput2.files.length > 0)
{
	const fileName1 = fileinput1.files[0].name;
	const fileName2 = fileinput2.files[0].name;
	
	if(fileName1 === fileName2)
	{
	alert("Both Files are same!");
	
	}
	else{
	alert("Both files are Not Same!");
}
}else{
alert("Please select two files to compare.");
}

}





var check = function ValidateFile() {



  if (document.getElementById('sfilename').value == 
    document.getElementById('tfilename').value ) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Both Files are Same';
  } else{
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Both Files are Not Same!';
  }
}
