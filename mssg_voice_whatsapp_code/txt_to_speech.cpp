#include <iostream>
#include <stdio.h>
#include <stdlib.h>

// using namespace std;

int main()
{
  // Tell the instructions to the user and waits until they open Whatsapp web
  std::cout<<"Convert Whatsapp text messages to voice notes!" << std::endl << std::endl;
  std::cout << "Instructions:\n-Open Whatsapp Web in your browser, open any chat with text messages in it\n-Open the console (usually with the F12 key)\n-Answer yes to the \"Do you want to continue? (y/n)\" question " << std::endl;
  
  std::cout << "\nDo you want to continue? (y/n): ";
  std::string execute_program_response;
  std::cin >> execute_program_response;

  if (execute_program_response == "y" || execute_program_response == "yes")
  {
    system("cd ./mssg_voice_whatsapp_code && type downloadTxtMssg.js | clip"); // Read the downloadTxtMssg.js file and copy its content using the command line
    std::cout << "Successful. The program is now in your clipboard!"<< std::endl;
    std::cout << "\n-Paste (CTRL+V) the program in the console and press <enter> key. A small image/logo must appear at the top left menu (next to your profile photo)\n-Click on the logo\n-A small logo must appear at the end of the text messages\n-Click on the logo that contains the text message you want to send\n-Save the .txt file generated in the same folder where you downloaded the repo." << std::endl;
  }
  else
  {
    std::cout << "Exiting the program." << std::endl;
    return 0;
  }

  //Wait until the user downloads the txt file
  while (true)
  {
    std::cout << "\nDid you copy the program and downloaded the .txt file? (y/n): ";
    std::string is_txt_file_generated_response;
    std::cin >> is_txt_file_generated_response;

    // Check the user's response
    if (is_txt_file_generated_response == "y" || is_txt_file_generated_response == "yes")
    {
      break; // The user has copied the code
    }
    else
    {
      // Read the downloadTxtMssg.js file and copy its content using the command line
      system("cd ./mssg_voice_whatsapp_code && type downloadTxtMssg.js | clip");
      system("echo Successful. The program is now in your clipboard");
    }
  }
  
  // Check if Python is installed (any version)
  std::cout << "\nChecking if Python is installed..." << std::endl << std::endl;
  
  if (system("where python >nul 2>&1") == 0) 
  {
    // Python is installed, so run a Python script
    system("echo Python is installed");
    system("cd ./mssg_voice_whatsapp_code && py txt_to_speech.py");
  } else {
    // Python is not installed, so open the default web browser to a specific website
    system("echo Python not installed. Opening Google Colab...");
    std::string command = "start https://colab.research.google.com/drive/1Df69-OhJx370xQx_lXHhkvvtO0SIynG5?usp=share_link";
    system(command.c_str());
  }
  
  //g++ -o txt_to_speech <name exe> txt_to_speech.cpp <name.cpp>
  return 0;
}