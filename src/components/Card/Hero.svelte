<script lang="ts">
  import { calculateWidth } from "src/lib"
  export let backgroundColor: string = "white";
  export let classes: string = "";
  import {onMount} from "svelte";

  let section:HTMLElement;
  const {innerWidth: inn, outerWidth} = window;

  function sizeHeading() {
  const {innerWidth} = window;
  const calculatedSize = (innerWidth / outerWidth) * 100
  section.style.height = `${calculatedSize}%`

}
onMount(() => {
window.addEventListener('resize', sizeHeading);
const elements = [section];
const width = [8];
const style = ["gap"]
const listener = () => calculateWidth(elements, width, style);
window.addEventListener("resize",listener)
  return () => {
    window.removeEventListener("resize",sizeHeading);
    window.removeEventListener('resize', listener)
  }
})
</script>

<section
  class="h-[100vh] bg-[{backgroundColor}]"
>
<div bind:this={section} class={classes+ " w-full mt-40"}>
  <slot />
</div>
</section>
