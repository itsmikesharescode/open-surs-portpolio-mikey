<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

</script>

<Carousel.Root class="w-full sm:max-w-xl ">
    <Carousel.Content>
        {#each ["", "", "", ""] as projects }
            <Carousel.Item>
                <div class="h-[50dvh]">
            
                    Simple Enrollment System

                    
                        
                    

                    
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>

    <Carousel.Previous />
    <Carousel.Next />
</Carousel.Root>
