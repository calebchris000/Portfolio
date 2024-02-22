<script lang="ts">
  import Icon from "@iconify/svelte";
import styles from "./styles.module.scss";
    export let texts: string[] = ["Based In Lagos, Nigeria", "Open For Remote Work", "4+ years of experience"]

</script>

<section class="fixed bottom-0 max-md:hidden  bg-green-300 left-0 right-0 py-8 overflow-hidden">
<div class={`${styles.sub} flex items-center gap-5 w-[260rem] overflow-hidden`}>
{#each texts as text}
<p class="text-2xl">{text}</p>
<Icon icon="ic:baseline-circle" class="text-sm"/>
{/each}
{#each texts as text}
<p class="text-2xl">{text}</p>
<Icon icon="ic:baseline-circle" class="text-sm"/>
{/each}
{#each texts as text}
<p class="text-2xl">{text}</p>
<Icon icon="ic:baseline-circle" class="text-sm"/>
{/each}
{#each texts as text}
<p class="text-2xl">{text}</p>
<Icon icon="ic:baseline-circle" class="text-sm"/>
{/each}
</div>
</section>