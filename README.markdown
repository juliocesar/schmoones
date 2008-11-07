#Schmoones

Inspired by [Choones](http://github.com/benschwarz/choones/tree/master), this started off as a [Prototype](http://www.prototypejs.org/) port,
but I ended up adding message queueing and transitions to it.

Refer to [Choones' README](http://github.com/benschwarz/choones/tree/master) for more info about the pattern.

The gist: growl-like notifications, but for the web!

##Usage

Refer to the global SCHMOONES object that gets declared when you initialize a page:

    SCHMOONES.message({title: "Hola", message: "Mundo"})
    
Messages will display for 5 seconds by default. If there's any other message in the queue, it'll transition to it, otherwise, the container will go away.

    SCHMOONES.message({title: "Lasts for 3 seconds", message: "Countdown: 3... 2... 1...", duration: 3})

##Styling

Schmoones comes with default settings for padding, margins, and sizes. You should be able to override them with a CSS file, or messing with the code.

##Oh but...

It still doesn't have multiple types of message (e.g.: success, or failure). I'll give it some thought and come up with something soon.