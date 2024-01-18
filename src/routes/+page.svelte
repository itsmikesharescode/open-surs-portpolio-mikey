<script lang="ts">
    import myprofile from "$lib/Images///myprofile.jpg";
    import folder from "$lib/Images/mysvgs/folder.svg";
    import linkIn from "$lib/Images/mysvgs/in.svg";
    import gh from "$lib/Images/mysvgs/gh.svg";
    import fb from "$lib/Images/mysvgs/fb.svg";
    import yt from "$lib/Images/mysvgs/yt.svg";
    import word from "$lib/Images/mysvgs/word.svg";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Button } from "$lib/components/ui/button";
	import TechStack from "./TechStack.svelte";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import * as Card from "$lib/components/ui/card";
    import * as Drawer from "$lib/components/ui/drawer";

    import js from "$lib/Images/mysvgs/Stacks/js.svg";
    import svelte from "$lib/Images/mysvgs/Stacks/svelte.svg";
    import react from "$lib/Images/mysvgs/Stacks/react.svg";
    import go from "$lib/Images/mysvgs/Stacks/Go.svg";
    import tw from "$lib/Images/mysvgs/Stacks/tailwind.svg";
    import sb from "$lib/Images/mysvgs/Stacks/supabase.svg";
    import fireb from "$lib/Images/mysvgs/Stacks/firebase.svg";
    import ts from "$lib/Images/mysvgs/Stacks/ts.svg";
    import vercel from "$lib/Images/mysvgs/vercel.svg";
    import vercelWhite from "$lib/Images/mysvgs/vercelWhite.svg";
    import { projects } from "$lib/projects";
	import { darkMode } from "$lib";
	import { onMount } from "svelte";

</script>

<div class="min-h-[100dvh] flex flex-col justify-center p-4">

    <div class="flex flex-col lg:flex-row items-center gap-4 sm:max-w-[80dvw] mx-auto ">
        <div class="">
            <img src={myprofile} alt="myprofile" class="rounded-full w-[200px] lg:w-[300px]" />
        </div>
    
        <div class="flex flex-col gap-2">
            <h1 class="text-[1.5rem] text-center sm:text-left lg:text-[3rem] font-bold text-red-700">Hi there, I'm Mike John. a Junior Web Developer</h1>
            <p class="text-sm text-center sm:text-left sm:text-base">
                As a passionate and curious individual, I have always been fascinated by the logic behind computers. This interest has led me to develop a strong foundation in web development, and I am constantly seeking to expand my knowledge and skills in this field. With my enthusiasm and dedication, I am confident that I can make a valuable contribution to any team.
            </p>

            <p class="text-sm text-center sm:text-left sm:text-base">
                I am confident that web development is a field with a bright future, and I am excited to be a part of it. In addition to my studies, I have also gained experience in making websites through my personal projects. I have built websites for my friends, family, and community organizations. I have also built websites for businesses and startups.
            </p>

        </div>

        
    </div>
    
    <div class="sm:max-w-[80dvw] mx-auto mt-5 flex flex-col w-full justify-center items-center lg:flex-row lg:justify-end gap-4">

        
        <span title="Click to view projects that i had made." class="flex items-center truncate rounded-lg hover:bg-[#ffffff31]">

            <Drawer.Root>
                <Drawer.Trigger asChild let:builder>
                    <Button builders={[builder]} variant="outline" class="border-0 p-2 rounded-lg hover:bg-[#ffffff31] ">
                        <img src={folder} alt="folder" class="inline-block w-5 h-5" />
                        <div class="transition-all hover:text-red-500 underline text-blue-500 font-bold">Created Projects</div>
                    </Button>
                </Drawer.Trigger>

                <Drawer.Content>
                   
                    <Drawer.Header class="">
                        <Drawer.Title class="text-center">Created Projects ❤️❤️</Drawer.Title>
                    
                        <div class="overflow-auto max-h-[70dvh] flex flex-col gap-4 lg:flex-row mt-5 lg:flex-wrap lg:justify-center">
                            {#each $projects as project }
                            <Card.Root class="w-full lg:w-[25%] shadow-lg">
                                <Card.Header class="text-left">
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Description>Read full details at github link.</Card.Description>
                                </Card.Header>
                                
                                <Card.Content class="flex flex-col gap-2">
                                    
                                    <div class="flex gap-2 break-words">
                                        <p class="text-sm font-bold">Official Live Website: </p>
                                        <a href={project.officialURL} target="_blank" class="transition-all text-blue-600 underline hover:text-red-600 text-sm">Click here</a>
                                    </div>

                                    <div class="flex gap-2 break-words">
                                        <p class="text-sm font-bold">Github Link: </p>
                                        <a href={project.ghURL} target="_blank" class="transition-all text-blue-600 underline hover:text-red-600 text-sm">Click here</a>
                                    </div>
                                </Card.Content>

                                <Card.Footer>
                                    <div class="flex gap-2 justify-end w-full">
                                        <img src={svelte} class="w-5" alt="" />
                                        <img src={tw} class="w-5" alt="" />
                                        <img src={sb} class="w-5" alt="" />

                                        {#if $darkMode}
                                            <img src={vercel} class="w-10" alt="" />
                                        {:else}
                                            <img src={vercelWhite} class="w-10" alt="" />
                                        {/if}
                                        
                                    </div>
                                </Card.Footer>
                            </Card.Root>
                        {/each}
                        </div>
                        

                    </Drawer.Header>
                    
                    <Drawer.Footer>
                        
                        
                    </Drawer.Footer>
                  

                    
                </Drawer.Content>
            </Drawer.Root>

            <!-- <AlertDialog.Root>
                <AlertDialog.Trigger asChild let:builder>

                    <Button builders={[builder]} variant="outline" class="border-0 p-2 rounded-lg hover:bg-[#ffffff31]">
                        <img src={folder} alt="folder" class="inline-block w-5 h-5" />
                        <a href="/" class="transition-all hover:text-red-500 underline text-blue-500 font-bold">Created Projects</a>
                    </Button>

                </AlertDialog.Trigger>
                <AlertDialog.Content class="shadow-sm shadow-black dark:shadow-white">
                    <AlertDialog.Header>
                    <AlertDialog.Title>Creator is busy doing capstone shits!</AlertDialog.Title>
                    <AlertDialog.Description class="text-black dark:text-slate-400">
                        This functionality will be available soon, featuring a cringe collection of capstone projects that I've developed and made open source!
                    </AlertDialog.Description>
                    </AlertDialog.Header>
                    <AlertDialog.Footer>
                    <AlertDialog.Action>Continue Baby!</AlertDialog.Action>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog.Root> -->

        </span>
        

        <span title="Click to view my linkIn account." class="flex items-center truncate p-2 rounded-lg hover:bg-[#ffffff31]">
            <img src={linkIn} alt="folder" class="inline-block w-5 h-5" />
            <a href="https://www.linkedin.com/in/mike-john-eviota-4443a6288/" target="_blank" class="text-sm transition-all hover:text-red-500 underline text-blue-500 font-bold">LinkedIn</a>
        </span>

        
        <span title="Click to view my github accounts." class="flex items-center truncate">


            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                    <Button builders={[builder]} variant="outline" class="border-0 p-2 rounded-lg hover:bg-[#ffffff31] ">
                        <img src={gh} alt="folder" class="inline-block w-5 h-5 bg-white rounded-full" />
                        <div class="transition-all hover:text-red-500 underline text-blue-500 font-bold hover:cursor-pointer">Github Links</div>
                    </Button>
                </DropdownMenu.Trigger>
            
                <DropdownMenu.Content class="w-56">
                  
                  <DropdownMenu.Item>
                    
                    <span class="flex gap-2">
                        <img src={gh} alt="folder" class="inline-block w-5 h-5 bg-white rounded-full" />
                        <a href="https://github.com/itsmikejohn" target="_blank" class="transition-all hover:text-red-500 underline text-blue-500 font-bold hover:cursor-pointer">itsmikejohn</a>
                    </span>
                  </DropdownMenu.Item>
                  
                  <DropdownMenu.Item>
                    
                    <span class="flex gap-2">
                        <img src={gh} alt="folder" class="inline-block w-5 h-5 bg-white rounded-full" />
                        <a href="https://github.com/itsmikesharescode" target="_blank" class="transition-all hover:text-red-500 underline text-blue-500 font-bold hover:cursor-pointer">itsmikesharescode</a>
                    </span>
                  </DropdownMenu.Item>
                  
                </DropdownMenu.Content>
            </DropdownMenu.Root>

            
        </span>

        <span title="Click to view my facebook account." class="flex items-center truncate p-2 rounded-lg hover:bg-[#ffffff31]">
            <img src={fb} alt="folder" class="inline-block w-5 h-5" />
            <a href="https://www.facebook.com/mike.eviota" target="_blank" class="text-sm transition-all hover:text-red-500 underline text-blue-500 font-bold">Facebook</a>
        </span>

        <span title="Click to view my youtube account." class="flex items-center truncate p-2 rounded-lg hover:bg-[#ffffff31]">
            <img src={yt} alt="folder" class="inline-block w-5 h-5" />
            <a href="https://www.youtube.com/@mikeSharesCode" target="_blank" class="text-sm transition-all hover:text-red-500 underline text-blue-500 font-bold">Youtube Channel</a>
        </span>

        <span title="Click to view my CV" class="flex items-center truncate p-2 rounded-lg hover:bg-[#ffffff31]">
            <img src={word} alt="folder" class="inline-block w-5 h-5" />
            <a href="https://docs.google.com/document/d/1JmVh6dJRAAEfLPQwJ89TIjd-_gvfdscO/edit?usp=drive_link&ouid=109818094393525011989&rtpof=true&sd=true" target="_blank" class="text-sm transition-all hover:text-red-500 underline text-blue-500 font-bold">View/Download my CV</a>
        </span>
    </div>


    <TechStack />

</div>



