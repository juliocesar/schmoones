#Schmoones

Inspired by [Choones](http://github.com/benschwarz/choones/tree/master), this started off as a [Prototype](http://www.prototypejs.org/) port,
but I ended up adding message queueing and transitions to it.

Refer to [Choones' README](http://github.com/benschwarz/choones/tree/master) for more info about the pattern.

##Usage

Refer to the global SCHMOONES object that gets declared when you initialize a page:

    SCHMOONES.message({title: "Hola", message: "Mundo"})
    
Messages will display for 5 seconds. If there's any other message in the queue, it'll transition to it, otherwise, the container will go away.

##Styling

Schmoones comes with default settings for padding, margins, and sizes. You should be able to override them with a CSS file, or messing with the code.

##Oh but...

Yeah, it doesn't feature success or failure messages. I had no need for any of that, so I left it out. Specifying how long a message lasts on the screen is something I'm implement soon.