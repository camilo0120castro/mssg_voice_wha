#include <iostream>
#include <stdio.h>
#include <stdlib.h>

int main() {
  // Check if Python is installed (any version)
  if (system("where python >nul 2>&1") == 0) {
    // Python is installed, so run a Python script
    system("echo Python is installed");
    system("cd ./mssg_voice_whatsapp_code && py txt_to_speech.py");
  } else {
    // Python is not installed, so open the default web browser to a specific website
    system("echo Opening Google Colab");
    std::string command = "start https://colab.research.google.com/drive/1Df69-OhJx370xQx_lXHhkvvtO0SIynG5?usp=share_link";
    system(command.c_str());
  }
  //g++ -o txt_to_speech <name exe> txt_to_speech.cpp <name.cpp>
  return 0;
}
