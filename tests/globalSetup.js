import { vi } from "vitest";

/** @type {Configs} */
const configs = {
	admin: {
		commands: {
			timer: ["!timer"],
			clearList: ["!clearlist"],
			clearDone: ["!cleardone"],
			clearUser: ["!clearuser"],
		},
		responseTo: {
			EN: {
				timer: "Timer has been reset to {message} minutes",
				clearList: "{user}, All tasks have been cleared",
				clearDone: "{user}, All done tasks have been cleared",
				clearUser: "{user}, All tasks for {message} have been cleared",
			},
		},
	},
	user: {
		commands: {
			addTask: ["!add", "!task", "!addtask", "!taskadd"],
			editTask: ["!edit", "!edittask", "!taskedit"],
			finishTask: ["!done", "!donetask", "!taskdone"],
			deleteTask: ["!delete", "!deletetask", "!taskdelete", "!remove"],
			check: ["!check", "!taskcheck", "!checktask", "!mytask"],
			help: ["!help", "!taskhelp", "!helptask"],
			additional: ["!credit", "!taskbot"],
		},
		responseTo: {
			EN: {
				addTask: 'Task(s) "{message}" added, {user}!',
				editTask: 'Task "{message}" updated, {user}!',
				finishTask:
					'Good job on completing task(s) "{message}" {user}!',
				deleteTask: 'Task "{message}" has been deleted, {user}!',
				deleteAll: "All of your tasks have been deleted!",
				check: 'Your current task is: "{message}", {user}',
				help: "Try using these commands - !add !edit !done !delete",
				additional:
					"Jujoco is the creator of this bot, check out his Twitch at: https://www.twitch.tv/JujocoCS",
				maxTasksAdded:
					"{user}, maximum number of tasks reached, try removing some first.",
				noTaskFound: "Looks like you don't have a task up there {user}",
				invalidCommand:
					'{user}, Invalid command: "{message}" - Try !help',
			},
		},
	},
	settings: {
		languageCode: "EN", // "EN", "ES", "FR", "JP", etc.
		maxTasksPerUser: 5, // default 5
		scrollSpeed: 50, // default 50
		showUsernameColor: true, // true or false
		headerDisplay: "Timer", // "Timer", "None", "Commands", "Text"
		headerText: "Custom Text", // HeaderDisplay above must be "Text"
		testMode: false, // true or false - for testing purposes
	},
	styles: {},
};

vi.stubGlobal("configs", configs);
