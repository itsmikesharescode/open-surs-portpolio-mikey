<script lang="ts">
    import "../app.pcss";
    import { ModeWatcher } from "mode-watcher";
    import { toggleMode } from "mode-watcher";
    import { Switch } from "$lib/components/ui/switch";

    import { onMount } from "svelte";
    //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
    import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
	import { scale } from "svelte/transition";

    let ParticlesComponent: any;

    let isDarkMode = true;

    onMount(async () => {
        const module = await import("svelte-particles");

        ParticlesComponent = module.default;
    });

    $: particlesConfig = isDarkMode ? {

        particles: {
            color: {
                value: "#FFFFFF",
            },
            links: {
                enable: true,
                color: "#FFFFFF90",
            },
            move: {
                enable: true,
                speed: 1,
                
            },
            shape: {
                type: "circle",
            },
            number: {
                value: 30,
            },
            size: {
                value: {
                    min: 1,
                    max: 2,
                }
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
    } : {
        particles: {
            color: {
                value: "#000",
            },
            links: {
                enable: true,
                color: "#000",
            },
            move: {
                enable: true,
                speed: 1,
                
            },
            shape: {
                type: "circle",
            },
            number: {
                value: 30,
            },

            size: {
                value: {
                    min: 1,
                    max: 3,
                }
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
    };

    



    let onParticlesLoaded = (event: CustomEvent) => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async (engine: any) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(main);
        await loadSlim(engine);
    };

    

    const darkModeClick = () =>
    {
        isDarkMode = !isDarkMode;
        toggleMode();
    }

</script>

<div class="fixed z-10 m-2 top-0 right-0">
    {#key isDarkMode}
        <button on:click={darkModeClick} class="transition-all text-sm px-2 rounded-lg {isDarkMode ? "bg-white text-black" : "bg-black text-white "} " in:scale>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    {/key}
</div>

<ModeWatcher />

<slot/>



<svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    class="foo bar"
    style=""
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>

<!-- or -->

<!-- <svelte:component
    this="{ParticlesComponent}"
    id="tsparticles"
    class="foo bar"
    style=""
    url="{particlesUrl}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/> -->