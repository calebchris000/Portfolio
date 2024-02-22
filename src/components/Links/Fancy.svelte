<script lang="ts">
  export let title: string = ''
  import Icon from '@iconify/svelte'
  export let idTarget: number | string = ''
  export let id: string | null = '0'
  import styles from './styles.module.scss'
  import { onMount } from 'svelte'

  let anchor: HTMLAnchorElement
  let _title: HTMLParagraphElement
  let icon: HTMLDivElement

  function handleMouseEnter() {
    
    const last = anchor.lastChild
    const svg: any = last?.firstChild
    if (innerWidth < 820) {
      svg.style.transform = 'translate(0)'
      return
    }
    svg.style.transform = 'translateX(0)'
  }

  function handleMouse(e: MouseEvent) {
    const last = anchor.lastChild
    const svg: any = last?.firstChild
    if (innerWidth < 820) {
      svg.style.transform = 'translate(0)'
      return;
    }
    svg.style.transition = 'all 0.3s ease'
    svg.style.transform = 'translateX(-100%)'
  }

  onMount(() => {
    const last = anchor.lastChild
    const svg: any = last?.firstChild
    if (innerWidth < 820) {
      svg.style.transform = 'translate(0)'
    }
    window.addEventListener('resize', () => {
      const { innerWidth } = window

      if (innerWidth < 820) {
        svg.style.transform = 'translate(0)'
      }
    })
  })
</script>

<a
  bind:this={anchor}
  on:mouseenter={handleMouseEnter}
  {id}
  on:mouseleave={handleMouse}
  href="#{idTarget}"
  class="{styles.container} {id} fancy border-b border-gray-400 hover:border-black transition-all flex w-full items-center justify-between py-2"
>
  <p bind:this={_title} class="text-lg font-normal">{title}</p>
  <div bind:this={icon} class={`${styles.icon_holder} overflow-hidden`}>
    <Icon
      icon="material-symbols-light:arrow-forward"
      class="svg text-3xl translate-x-[-100%]"
    />
  </div>
</a>
