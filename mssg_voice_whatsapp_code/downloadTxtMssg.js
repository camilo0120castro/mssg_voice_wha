function currentDateTxt()
{
    //The date always has 2 digits. The year has 4 digits
    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth()+1);
    month = ('0'+month).slice(-2);
    let day = ('0'+currentDate.getDate()).slice(-2);
    let hour = ('0'+currentDate.getHours()).slice(-2);
    let mins = ('0'+currentDate.getMinutes()).slice(-2);
    let sec = ('0'+currentDate.getSeconds()).slice(-2);

    let dateTxt = year+month+day+"_"+hour+mins+sec;

    return dateTxt;
}

function dwnldTxtFile(fileName, txtContent)
{
    //Saves the text content in a .txt which starts to be downloaded automatically
    let dwlndElement = document.createElement('a');
    dwlndElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txtContent));
    dwlndElement.setAttribute('download', fileName);

    dwlndElement.style.display = 'none'; //It is not displayed to the user
    document.body.appendChild(dwlndElement);

    dwlndElement.click();

    document.body.removeChild(dwlndElement);
}

function saveTxtMssgContainer(allMssgContainer)
{
    let txtMssgContainer = [];
    let containerFlag = 0; //to save (loop through) the mssg container in an array

    // Check if the message container has a "span" element inside, if so, save the mssg container in an array
    for (let container of allMssgContainer)
    {
        /*TODO: Can this be done with? console.log(container.textContent); or .tagName?
        let tagName = container.tagName;
        if (tagName == "SPAN") */
        
        let containerContent = container.innerHTML;
        let tagName = containerContent.slice(0,6);
        if (tagName == "<span>")
        {
            txtMssgContainer[containerFlag] = container;
            containerFlag+=1; //containerFlag = containerFlag + 1;
        }
    }
    return txtMssgContainer;
}

function dwnldMssgContainer(container)
{
    //Retrieves the text from the message and sends it to a text file to be downloaded
    let mssgTxt = container.textContent; //Emojis not included, they are <img> elements
    let filename = "whaTxtMssg"+currentDateTxt()+".txt";
    dwnldTxtFile(filename, mssgTxt);
}


function dwnldIconMssgContainer(txtMssgContainer)
{
    for (let container of txtMssgContainer)
    {
        //Create a img node
        const dwnldIconImg = document.createElement("img");
        dwnldIconImg.src = "https://i.imgur.com/VwKTBNh.png";
        dwnldIconImg.style.height = "1rem"

        // Create an "a" node:
        let dwnldIcon = document.createElement("a");
        dwnldIcon.style.lineHeight = "normal";
        
        // Append the img node to the "a" node:
        dwnldIcon.appendChild(dwnldIconImg);
        
        // Append the download icon node to the message container:
        container.appendChild(dwnldIcon);
        
        //When the icon is clicked it downloads the Text Message
        dwnldIcon.addEventListener("click", () => dwnldMssgContainer(container));
    }
}

function obtainAllTxtMssg()
{
    //Gets all the containers with those classes and saves only the ones that have text in txtMssgContainer
    let allMssgContainerMain = document.getElementsByClassName("selectable-text copyable-text");

    let txtMssgContainerMain = saveTxtMssgContainer(allMssgContainerMain);
    
    //Includes a download icon/button in each mssg container with text. If it is clicked, the download starts.
    dwnldIconMssgContainer(txtMssgContainerMain);
}

function saveMenuPosition()
{
    // Check which menu container is the "main" menu container (at the top-left with the profile photo and other buttons). If it is the main menu container, puts the program logo before the other buttons
    for (let menuPosition of menuProgramPosition)
    {    
        let parentClassName = menuPosition.parentNode.classList;
        
        if (parentClassName == "_3yZPA")
        {
            //Create a img node
            const dwnldIconImg = document.createElement("img");
            dwnldIconImg.src = "https://i.imgur.com/VwKTBNh.png";
            dwnldIconImg.style.height = "1.5rem";
            dwnldIconImg.style.lineHeight = "normal";

            // Append the download icon node to the main menu:
            menuPosition.prepend(dwnldIconImg);
            
            //When the icon is clicked, it gets all the Text Messages that can be converted to voice notes
            dwnldIconImg.addEventListener("click", obtainAllTxtMssg);
        }
    }
}


/* ********Main Code******** */

//Gets all the possible containers (to put the program logo) with those classes
let menuProgramPosition = document.getElementsByClassName("_1QVfy _3UaCz");
saveMenuPosition();



//TODO: Can the download icon be shown only when the mouse enters the message container?
/*
for (let i = 0; i < allMssgContainer.length; i++) {
    allMssgContainer[i].addEventListener("mouseenter", function() {
        console.log("The mouse has entered the range of the div element!");
        //Create a img node
        const dwnldIconImg = document.createElement("img");
        dwnldIconImg.src = "../mssg_voice_whatsapp_logos/Logo_final.png"; 
        dwnldIconImg.style.height = "1rem"

        // Create an "a" node:
        let dwnldIcon = document.createElement("a");
        dwnldIcon.style.lineHeight = "normal";
        
        // Append the img node to the "a" node:
        dwnldIcon.appendChild(dwnldIconImg);
        
        // Append the download icon node to the message container:
        allMssgContainer[i].appendChild(dwnldIcon);
        
        //When the icon is clicked it downloads the Text Message
        dwnldIcon.addEventListener("click", () => dwnldMssgContainer(allMssgContainer[i]));
    });
    }
*/
//TODO: Make the program so when clicked again, the logo is deleted, so it is only shown 1 times