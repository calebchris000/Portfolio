<script lang="ts">
  import Fancy  from 'src/components/Links/Fancy.svelte'
  import styles from './styles.module.scss'
  import Strip from 'src/components/Strip/Strip.svelte'

  type ProjectType = {
    title: string
    id: string
    idTarget: string
  }
  const Projects: ProjectType[] = [
    { title: 'Pomodoro', id: '1', idTarget: 'pomodoro' },
    { title: 'Lumina', id: '2', idTarget: 'lumina' },
  ]
</script>

<section class="{styles.container} h-[100vh]">
  <div class="{styles.sub_container} min-w-72 w-full grid gap-8 max-md:gap-36 grid-rows-5 md:grid-cols-5">
    <div class="{styles.left} row-span-2 flex flex-col gap-6 md:col-span-3">
      <h1 class="{styles.title} xl:text-[10rem] max-xl:text-[8rem] max-lg:text-[5rem] max-md:text-7xl max-sm:text-6xl w-full leading-none font-medium">
        I'm Caleb Nwaizu.
      </h1>
      <p class="{styles.description} w-full xl:text-4xl lg:text-3xl max-md:text-2xl">
        I develop professional products and services with customers in mind.
      </p>
    </div>
    <div class="{styles.right} row-span-3 w-full flex flex-col md:col-span-2 gap-2 mt-2">
      <p class="text-sm font-medium text-gray-700">HIGHLIGHTED PROJECTS</p>

      <div>
        {#each Projects as { title, id, idTarget }}
          <Fancy {title} {id} {idTarget} />
        {/each}
      </div>
    </div>
  </div>
  <Strip />
</section>
