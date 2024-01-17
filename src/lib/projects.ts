import {writable} from "svelte/store";


export const projects = writable([
    {
        title: "Enrollment System",
        ghURL: "https://github.com/itsmikesharescode/shad-cn-enrollment-system-port",
        officialURL: "https://shad-cn-enrollment-system-port.vercel.app/",
    },

    {
        title: "Voting System",
        ghURL: "https://github.com/itsmikesharescode/simple-voting-system-sql",
        officialURL: "https://simple-voting-system-seven.vercel.app/"
    },

    {
        title: "Learning Management System",
        ghURL: "https://github.com/itsmikesharescode/simple-learning-management-system",
        officialURL: "https://simple-learning-management-system.vercel.app/"
    },

    {
        title: "My Internship Project",
        ghURL: "https://github.com/itsmikesharescode/my-internship-project",
        officialURL: "https://my-internship-project-one.vercel.app/"
    }
]);


