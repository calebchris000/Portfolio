<script lang="ts">
    export let currentPage: string = "0";
    export let totalPage: string = "4";
    export let title: string = "A Title";
    export let project: object[] = [{title: "Project", text: "Pomodoro Timer"}, 
    {title: "Role", text: "Developer Lead"}]
    export let tags: string[] = ["Web Developments"]

    export let images: string[] = []
    export let backgroundColor: string = "black"
</script>


<section style="background-color: {backgroundColor};" class=" w-full h-[100vh] pt-24"></section>