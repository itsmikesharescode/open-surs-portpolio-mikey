<script lang="ts">
    import js from "$lib/Images/mysvgs/Stacks/js.svg";
    import svelte from "$lib/Images/mysvgs/Stacks/svelte.svg";
    import react from "$lib/Images/mysvgs/Stacks/react.svg";
    import go from "$lib/Images/mysvgs/Stacks/Go.svg";
    import tw from "$lib/Images/mysvgs/Stacks/tailwind.svg";
    import sb from "$lib/Images/mysvgs/Stacks/supabase.svg";
    import fb from "$lib/Images/mysvgs/Stacks/firebase.svg";
    import ts from "$lib/Images/mysvgs/Stacks/ts.svg";

    import { Button } from "$lib/components/ui/button";
    import * as Popover from "$lib/components/ui/popover";
</script>

<div class="sm:max-w-[80dvw] mx-auto mt-[10dvh] w-full">
    <h2 class="text-[1.5rem] font-bold text-center sm:text-left">The technology I use?</h2>
    <p class="text-center sm:text-left text-sm sm:text-xl mt-2">
        Focused on <b class="text-red-700 dark:text-red-500">SvelteKit</b>, <b class="text-red-700 dark:text-red-500">Tailwind CSS</b>, <b class="text-red-700 dark:text-red-500">Supabase</b>, and <b class="text-red-700 dark:text-red-500">Firebase9</b>, I excel in crafting efficient and visually appealing web applications. Bonus proficiency in <b class="text-red-700 dark:text-red-500">ReactJS</b> and <b class="text-red-700 dark:text-red-500">Go lang</b> enhances my versatility in development.
    </p>
    
    <p class="text-sm font-bold mt-10 text-center">Click to view details:</p>
    <div class="flex flex-wrap justify-center gap-2 mt-5">

        
        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000000]">
                    <img title="Click, to view details." src={js} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span class="text-sm flex flex-col gap-2">
                        <b class="text-red-700 dark:text-red-500">JavaScript</b> is the programming language that brings websites to life, adding interactivity, dynamic elements, and behaviors that make them more engaging and user-friendly. It's like the magic behind interactive maps, animated graphics, scrolling videos, and forms that respond to your actions.

                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="text-blue-500 underline">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">75%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>

        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000050]">
                    <img title="Click, to view details." src={ts} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span class="text-sm flex flex-col gap-2">
                        <b class="text-red-700 dark:text-red-500">TypeScript</b> is the programming language that brings websites to life, adding interactivity, dynamic is a typed superset of JavaScript that adds a layer of safety and organization to your code, helping you catch errors early and write more maintainable applications.

                        <a href="https://www.typescriptlang.org/docs/" target="_blank" class="text-blue-500 underline">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">45%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>
        

        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000050] ">
                    <img title="Click, to view details." src={svelte} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span>
                        <div class="flex flex-col gap-2 sm:flex-row">
                            <div class="">
                                <h3 class="text-red-700 dark:text-red-500 font-bold">fast</h3>
                                <p class="text-sm">
                                    Powered by Svelte and Vite, speed is baked into every crevice: fast setup, fast dev, fast builds, fast page loads, fast navigation. Did we mention it's fast?
                                </p>
                            </div>

                            <div class="">
                                <h3 class="text-red-700 dark:text-red-500 font-bold">fun</h3>
                                <p class="text-sm">
                                    No more wasted days figuring out bundler configuration, routing, SSR, CSP, TypeScript, deployment settings and all the other boring stuff. Code with joy.
                                </p>
                            </div>

                            <div class="">
                                <h3 class="text-red-700 dark:text-red-500 font-bold">flexible</h3>
                                <p class="text-sm">
                                    SPA? MPA? SSR? SSG? Check. SvelteKit gives you the tools to succeed whatever it is you're building. And it runs wherever JavaScript does.
                                </p>
                            </div>
                        </div>

                        <a href="https://kit.svelte.dev/docs/introduction" target="_blank" class="text-blue-500 underline mt-10">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">80%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>

        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000050]">
                    <img title="Click, to view details." src={react} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span class="text-sm flex flex-col gap-2">
                        <b class="text-red-700 dark:text-red-500">React Js</b> 
                         is a popular JavaScript library for building user interfaces. It focuses on creating reusable components with isolated states, letting you build dynamic and interactive web applications with ease.

                        Think of it as Lego blocks for UI development, allowing you to snap together pre-built pieces to create unique and complex interfaces.

                        <a href="https://react.dev/learn" target="_blank" class="text-blue-500 underline">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">35%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>

        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000050]">
                    <img title="Click, to view details." src={go} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span class="text-sm flex flex-col gap-2">
                        <b class="text-red-700 dark:text-red-500">Go (Golang)</b> 
                         is a modern, open-source programming language known for its simplicity, concurrency, and efficiency.  With a focus on readability and fast compilation, it excels in building scalable web applications, microservices, and command-line tools.

                        <a href="https://go.dev/doc/effective_go" target="_blank" class="text-blue-500 underline">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">35%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>

        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000050]">
                    <img title="Click, to view details." src={tw} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span class="text-sm flex flex-col gap-2">
                        <b class="text-red-700 dark:text-red-500">Tailwind CSS</b> 
                        is a utility-first CSS framework that empowers you to build websites with rapid speed and unique designs, all without leaving your HTML.

                        <p>
                            Instead of pre-designed components, it provides a vast collection of low-level utility classes that you apply directly in your HTML to style elements as you go. Think of it as a customizable toolkit that lets you create bespoke designs without the overhead of traditional CSS frameworks.
                        </p>

                        <a href="https://tailwindcss.com/docs/installation" target="_blank" class="text-blue-500 underline">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">65%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>
       
        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000050]">
                    <img title="Click, to view details." src={sb} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span class="text-sm flex flex-col gap-2">
                        <b class="text-red-700 dark:text-red-500">Supabase</b> 
                        is a powerful open-source backend platform that simplifies building web applications, especially those needing a robust real-time database and authentication system. With features like:

                        <ul class="list-disc px-5">
                            <li>Authentication: Manage user logins, signups, and password resets through built-in tools.</li>
                            <li>Real-time database: Build dynamic and interactive applications with a powerful realtime database.</li>
                            <li>Storage: Host images, videos, and other files with ease.</li>
                            <li>Functions: Run server-side code without managing servers yourself.</li>
                            <li>GraphQL: Access and manipulate your data efficiently with GraphQL queries.</li>
                        </ul>

                        <a href="https://supabase.com/docs" target="_blank" class="text-blue-500 underline">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">70%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>

        <Popover.Root portal={null}>
            <Popover.Trigger asChild let:builder>
                <Button builders={[builder]} class="py-8 px-2 bg-[#FFFFFF50] dark:bg-[#00000050]">
                    <img title="Click, to view details." src={fb} alt="js" class="inline-block w-14 transition-all hover:scale-110 active:scale-95" />
                </Button>
            </Popover.Trigger>
            <Popover.Content class="w-80 sm:w-[40%] shadow-sm shadow-black dark:shadow-white">
            
                <div class="flex flex-col gap-2">
                    <span class="text-sm flex flex-col gap-2">
                        <b class="text-red-700 dark:text-red-500">Firebase</b> 
                        is a comprehensive backend platform for mobile and web development, offering a range of cloud-based tools to build and manage your apps effortlessly.

                        <ul class="list-disc px-5">
                            <li>Real-time database: Syncs data across devices in real-time, enabling interactive and collaborative experiences.</li>
                            <li>Authentication: Securely manages user accounts with email/password, social logins, and more. </li>
                            <li>Cloud Functions: Runs server-side code without managing infrastructure, ideal for backend logic and automation. </li>
                            <li>Hosting: Deploys web apps and static content with global CDN for fast delivery. </li>
                            <li>Storage: Host images, videos, and other files with ease.</li>
                            <li>Analytics: Tracks user behavior and app performance with comprehensive insights.</li>
                            <li>Push Notifications: Engages users with targeted messages across platforms.</li>
                            <li>Machine Learning: Integrates ML features for image labeling, text recognition, and more.</li>
                        </ul>

                        <a href="https://firebase.google.com/docs" target="_blank" class="text-blue-500 underline">Read docs.</a>
                    </span>

                    <div class="">
                        <b>Mastery/Exposure level: <i class="text-red-700 dark:text-red-500">65%</i></b>
                    </div>
                </div>

            </Popover.Content>
        </Popover.Root>

       
    

    </div>
</div>