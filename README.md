# Twitch Chatbot Multitask Task List Overlay

<img src="./images/live-sample.png">
<br >
<img src="./images/customize-sample.png">

## What and Why?

A simple chat bot that allows users to interact with your stream.
Viewers can create, edit, mark as done, and delete tasks from the list. This bot is designed to help streamers and their viewers to keep track of tasks, goals, or objectives during a stream. The bot is designed to be simple, easy to use, and fast to setup. The bot is designed to be used in OBS or other streaming software as a Browser Source.

## **APP Features ✨**

-   Free to use
-   Easy setup
-   Easy to customize
-   Fast performance & super lightweight (19 kB bundle size)
-   No coding required
-   Customizable Multi-language support
-   No third-party database required
-   User features
    -   user can create multiple tasks
    -   user can edit tasks
    -   user can mark tasks as done
    -   user can delete tasks from their list
-   Supports multiple languages translations
    -   EN - English
    -   ES - Español
    -   FR - française
    -   JP - 日本語

## Content

-   [Installation](#installation)
-   [Customization settings](#customization-settings)
    -   [Behavior Settings](#behavior-settings)
    -   [Styles Settings](#styles-settings)
    -   [Fonts Styles](#fonts-styles)
    -   [App Styles](#app-styles)
    -   [Header Styles](#header-styles)
    -   [Body Styles](#body-styles)
    -   [Card Styles (individual cards)](#card-styles-individual-cards)
-   [Commands](#commands)
    -   [Commands for Everyone](#commands-for-everyone)
    -   [Commands for Broadcasters and Moderators](#commands-for-broadcasters-and-moderators)
-   [Aliases](#aliases)
-   [Credits](#credits)

## Installation

Download this repo and Add & Setup a `Browser Source` in your OBS or other streaming software with the local file source pointing to `index.html` in this repo.

## Customization settings

Open the `configs.js` file and modify the following settings to customized the TaskBot Behavior & Appearance.

### Twitch oAuth - Required

1. Get auth token from https://twitchapps.com/tmi
2. open `configs.js` file
3. Replace `OAUTHTOKEN` with your token
4. Replace `CHANNEL` with your channel name
5. Replace `USERNAME` with your username — in most cases it is the same as your channel name.

```js
twitch_oauth = "OAUTHTOKEN",
twitch_channel = "CHANNEL",
twitch_username = "USERNAME",
```

### Behavior Settings

`languageCode`: Default = **"EN"**

-   **"EN"**: English translation
-   **"ES"**: Spanish translation
-   **"FR"**: French translation
-   **"JP"**: Japanese translation

`maxTasksPerUser`: Default = **5**

-   **number**: A value between 1 - 10.

`scrollSpeed`: Default = **40**

-   **number**: A value between 1 - 100.

`showUsernameColor`: Default = **true**

-   **true**: will shows the user's twitch chat color
-   **false**: will show the color you set in the `username-color` style

`headerDisplay`: Default = "Timer"

Enable one will disable the others.

-   **"Timer"**: Display a timer in the header
-   **"None"**: Display nothing in the header
-   **"Text"**: Display a custom text in the header
-   **"Commands"**: Display commands tips in the header

`headerText`: Default = "Custom Text"

HeaderDisplay above must be set to "Text"

`testMode`: Default = **false**

-   **false**: turn OFF test mode.
-   **true**: turn ON test mode.

Use this to test the bot without affecting the real task list and visually see the style changes you make. When test mode is OFF, the bot will work as normal and remove any test tasks.

### Styles Settings

The following settings are for styling the TaskBot. Default values are provided below. If at any point you want to reset the styles to the default values you can find the default values below next to each style name.

**Font Family** - selection available @ https://fonts.google.com

-   headerFontFamily: "Roboto Mono"
-   cardFontFamily: "Roboto Mono"

**App Styles**

-   appBorderRadius: Default = **"5px"**
-   appPadding: Default = **"8px"**
-   appBackgroundImage: Default = **"url(../images/transparent-image.png)"**
-   appBackgroundColor: Default = **"rgba(0, 0, 0, 0)"**

**Header Styles**

-   headerDisplay: Default = **"flex"**
-   headerBorderRadius: Default = **"6px"**
-   headerMarginBottom: Default = **"6px"**
-   headerBackgroundColor: Default = **"rgba(45, 45, 45, 0.7)"**
-   headerFontSize: Default = **"20px"**
-   headerFontColor: Default = **"#FFFFFF"**
-   headerFontWeight: Default = **"normal"**

**Body Styles**

-   bodyBackgroundColor: Default = **"rgba(0, 0, 0, 0)"**

**Card Styles**

-   cardGapBetween: Default = **"6px"**
-   cardBorderRadius: Default = **"6px"**
-   cardBackgroundColor: Default = **"rgba(45, 45, 45, 0.7)"**

**Username Styles**

-   usernameFontSize: Default = **"18px"**
-   usernameColor: Default = **"#FFFFFF"**
-   usernameFontWeight: Default = **"normal"**

**Task Styles**

-   taskFontSize: Default = **"16px"**
-   taskFontColor: Default = **"#FFFFFF"**
-   taskFontWeight: Default = **"normal"**
-   taskDoneFontColor: Default = **"#aaaaaa"**
-   taskDoneFontStyle: Default = **"#italic"**
-   taskDoneTextDecoration: Default = **"none"**

## Commands

### Commands for Everyone

-   `!task` - Add task(s) (multiple tasks must be separated by a comma)

    -   example: `!task read ch. 3`
    -   example: `!task prep for exam, walk dog`

-   `!edit` - Edit a single task

    -   example: `!edit 1 read ch. 4`
    -   example: `!edit 2 walk cat`

-   `!done` - Mark task(s) as done (multiple tasks must be separated by a comma)

    -   example: `!done 1`
    -   example: `!done 2, 3`

-   `!delete` - Delete task(s) (multiple tasks must be separated by a comma)

    -   example: `!delete 1`
    -   example: `!delete 2, 3`

-   `!check` - Check your remaining tasks

    -   example: `!check`

-   `!credit` - Show the credits

    -   example: `!credit`

### Commands for Broadcasters and Moderators

-   `!timer` - Set the focus and break timer for a session (in minutes)

    -   example: `!timer 60/10`
    -   example: `!timer 90/15`

-   `!clearlist` - Clear all tasks from the list

    -   example: `!clearlist`

-   `!cleardone` - Clear all done tasks

    -   example: `!cleardone`

-   `!clearuser` - Remove all tasks from a User (case sensitive username)

    -   example: `!clearuser JujocoCS`

For aliases, see [here](#aliases)

## Aliases

### User Commands

**add task commands:**

-   `!task`
-   `!add`
-   `!taskadd`
-   `!addtask`

**edit task commands:**

-   `!edit`
-   `!taskedit`
-   `!edittask`

**complete task commands:**

-   `!done`
-   `!donetask`
-   `!taskdone`

**delete task commands:**

-   `!delete`
-   `!remove`
-   `!taskdelete`
-   `!deletetask`

**check commands:**

-   `!check`
-   `!mytasks`

**help commands:**

-   `!help`
-   `!taskhelp`
-   `!helptask`

**extra commands:**

-   `!credit`
-   `!taskbot`

## Credits

**Author:** [**@JujocoCS**](https://twitch.tv/JujocoCS)

**App Inspired by:** [**@RythonDev**](https://twitch.tv/RythonDev) & [**@JPStudyTime**](https://twitch.tv/JPStudyTime) & [**@MohFocus**](https://twitch.tv/MohFocus)
