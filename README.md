## Origin

The idea was born when I wanted to send a voice message to my grandmother (who is blind) but I was busy in a reunion or in a place with so much noise that made impossible to send the voice message.

With this tool you can type your message as text in Whatsapp Web (in a web browser) and convert it to a voice message ready to be sent to your family and friends.

## Version Notes
#### Version 1.1
- Now the program is more functional and it requires less steps to complete!
- Error messages and more user-interaction were added
- The program was reduced to a *single* `.exe` file (See *How does it works?* section below)
- Now, when executing the program, a small image/logo will appear at the top left menu (next to your profile photo). When clicked, smaller logos will appear at the end of the text message of the currently open chat. They follow the same behaviour as in the last version See *How does it works?* section below)
- You can open a new chat and the logo in the top left menu will stay there. Click it to convert a text message to a voice note in this new chat!
- You can also check my video tutorial on my LinkedIn profile: https://www.linkedin.com/in/camilo-castro-vallejo/

## Important Information:

### Technical Info:

- This program only works in Whatsapp Web (in a web browser).
- This program was tested in Mozilla Firefox and Google Chrome in Windows 10. It may not work in other browsers or in other operating systems.
- To run the `txt_to_speech.py` file you must install Python 3.5 or newer and then install `gTTs` using the command prompt/terminal by executing the next line of code: `$ pip install gTTS`
- If Python is not installed in your computer you can use the following Google Colab Notebook: https://colab.research.google.com/drive/1Df69-OhJx370xQx_lXHhkvvtO0SIynG5?usp=share_link
- Remember that running external scripts on Whatsapp can cause a temporary or permanent ban. I will not be responsible for the use that can be given to this code beyond the originally intended operation
- The use of this code is the sole responsibility of the final user

### Program Execution Info:

- The text message must be sent prior executing the program
- This program does **not** work with emojis
- You must select the `path`/folder where you want to download the text file. The `.txt` file must be saved in the same place as the `txt_to_speech.exe` file
- The program only converts the last `.txt` file generated. This means that you must download a text message and **inmediately** run the program to convert it to audio, and send it via Whatsapp web
- The audio file generated must be manually sent to the contact you are chatting with

## How does it work?

First, download this GitHub repo, click the green button that says *code* and then click *Download Zip*.

Extract the `.zip` file and then open the `txt_to_speech.exe` file, a command prompt/terminal window will open with instructions. Open Whatsapp Web in your web browser (Firefox or Chrome), open the conversation with the contact you want to send the voice message to, open the console (press `F12` key), paste (`CTRL+V`) the program in the console. Press `<enter>` key. A image/logo must appear at the top left menu (next to your profile photo).

Click on the menu logo. A smaller logo must appear at the end of each of the text messages. Click on the logo that contains the text message you want to send as a voice note, save the `.txt` file generated in the same folder where you downloaded the repo. Open the folder where you downloaded the repo. Continue the instructions in the `txt_to_speech.exe` file.

If Python is installed, you will select the language that you want to use to convert the text message to a voice note. The program will generate a `.mp3` file with the same name as the `.txt` message file. If everything is correct the program will show "Audio file <name> generated correctly" and will ask you if you want to open Whatsapp web in the web browser in a new tab.

If Python is not installed on your computer the command prompt/terminal window will open the Google Colab Notebook in your default browser. Follow the instructions inside the notebook. Upload the `.txt` message file, install the library, run the program, download the `.mp3` file generated.

On Whatsapp Web, open the conversation with the contact you want to send the voice message to, drag and drop the `.mp3` file generated. Click "send".

You can also check my video tutorial on my LinkedIn profile: https://www.linkedin.com/in/camilo-castro-vallejo/


Made by: Camilo Castro

Last update: Jan 07, 2022


## Credits:

- The algorithm to always show 2 digits in the date: https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
- How to add an addEventListener to multiple buttons: https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur and https://www.thiscodeworks.com/add-event-listener-to-multiple-buttons-with-the-same-class-javascript/5efa75c76c23bc0014be6336
- The syntax to prevent the function to run automatically in an addEventListener: https://stackoverflow.com/questions/64621108/item-addeventlistener-runs-automatically
