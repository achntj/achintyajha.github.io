---
layout: post
title: Using a custom theme on IDLE (on a Macintosh system)
description: Changing themes on idle is not something everyone does; incase you are interested, here it is!
oneline: It's easy ahaha
location: New Delhi, India
---

![]({{ site.baseurl }}/images/posts/dracula.png)
_Dracula Theme on IDLE!_

## Step 1: Find your ~/.idlerc file

Based on what I found on *StackOverflow*, it's pretty easy to find it on your home directory. Findind it on Mac is a bit different(That's what I will talk about next).

Open the terminal in your root directory then type-

```shell
    cd ~/.idlerc
    touch config-highlight.cfg
    open .
```

This will open the ~/.idlerc folder with the custom theme config file. Now open this file from finder or use 

```shell
    open -a TextEdit config-highlight.cfg
```

Now paste the theme code snippet into this file and save it. It's simpler from here on. Open IDLE Preferences, and go to highlights and choose the custom theme. Dead Simple Right? I never knew it untill today!
