# W7D1

LEARN YOU NODE

This exercise will help you become more familiar with the basics of npm and node.

To start we'll leverage learnyounode which is an open source npm module that is designed to teach the basics of how to use node.

Given that you are in week 7 and nearly ready to graduate, the node exercise is intentionally not starting with the basics. Learnyounode moves fast and assumes the student already knows fundamentals of programming and is already a developer. That is why we chose it.

Like we used RVM in ruby, we will use Node Version Manager (NVM) to efficiently manage node.js installations. Like rvm it gives you the flexibility to install multiple node versions, independent of each other on the same machine.

Installation (OPTIONAL)
If you are using Vagrant, then nvm, node and learnyounode is already installed. You can safely skip to next section.

Install nvm
If you are not using Vagrant, lets start by installing nvm

$ curl https://raw.githubusercontent.com/creationix/nvm/v0.19.0/install.sh | bash
Or if you use brew you can install it via the following command

$ brew update
$ brew install nvm
Add source ~/.nvm/nvm.sh to ~/.profile, ~/.bashrc or ~/.zshrc. Restart your terminal.

$ echo "source ~/.nvm/nvm.sh" >> ~/.profile
Install node
$ nvm install v5.1.1
$ nvm alias default v5.1.1
Install learnyounode
To install it globally to your command line, just run:

$ sudo npm install -g learnyounode
NOTE: The $ denotes command line prompt and is not meant to be taken literally.

Getting started
Now that the module is installed globally you can start the tutorial by running the command:

$ learnyounode
This will bring up a list of “challenges” (exercises). These exercises will help you to get comfortable with the core concepts of node. Use your arrow keys and the enter key to select and complete the following 7 exercises, in order:

HELLO WORLD
BABY STEPS
MY FIRST I/O
MY FIRST ASYNC I/O
FILTERED LS
MAKE IT MODULAR
HTTP CLIENT
Create (touch) a separate js file (eg: 01_hello_world.js) for each challenge. Naturally, you will want to keep them all in the same folder, and commit them to your github as a single repo. You can call this github repo learn-me-some-node :)

Notes:

Since learnyounode is installed globally (using -g on npm) you can run it from anywhere in your vagrant machine
Once you select a challenge, the learnyounode verify command attempts to verify only that challenge. To verify another challenge, remember to switch to it using the menu system first.
Running the learnyounode command is very much like running the node command, except it passes in the necessary arguments (ARGV) and then captures and inspects the output (standard out) in order to do test and see if it matches the expected output.
Use learnyounode help to see a list of commands
