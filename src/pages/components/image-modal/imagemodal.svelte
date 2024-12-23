<script lang="ts">
    import { store } from "@src/lib/store";
</script>

<section
    class:pointer-events-none={!$store.showImageModal}
    class="fixed inset-0 z-[999]"
>
    <button
        type="button"
        on:click={() => {
            $store.showImageModal = false;
        }}
        class:opacity-0={!$store.showImageModal}
        class="bg-black/30 backdrop-blur-sm absolute transition-all inset-0"
    ></button>
    <section
        class:opacity-0={!$store.showImageModal}
        class="h-[90dvh] w-[80vw] flex flex-col items-center justify-between transition-all bg-gray-600 p-4 rounded-md absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
        <div class="mr-auto w-full">
            <button
                on:click={() => {
                    $store.showImageModal = false;
                    $store.imageModalUrl = "";
                }}
                class="bg-blue-700 font-medium p-2 rounded-md px-4 text-white"
                >Cancel</button
            >
        </div>
        <div class="w-[95%] rounded-xl overflow-hidden">
            <img class="w-full" src={$store.imageModalUrl} alt="" />
        </div>
    </section>
</section>
