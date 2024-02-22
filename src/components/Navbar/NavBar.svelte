<script lang="ts">
  import type { NavbarAction } from "src/types/index";
  import "./style.css";
  export let userName: string = "Caleb Nwaizu";
  export let profileImage: string = "src/assets/man.png";
  export let actions: NavbarAction[] = [
    { name: "About", link: "/about" },
    { name: "Works", link: "/works" },
    { name: "Contact", link: "/contact" },
  ];
</script>

<nav
  class="nav bg-white border w-full overflow-x-hidden fixed left-0 right-0 px-24 py-4 mt-4 min-w-[5rem] mx-auto max-lg:p-2 max-lg:px-8 max-lg:bg-white max-lg:rounded-full"
>
  <section class="left">
    <a href="/" class="w-8 h-8">
      <img
        class="profile max-lg:w-8 max-lg:h-8 w-8 h-8"
        src={profileImage}
        alt=""
      />
    </a>
    <a href="/">
      <p class="name max-md:hidden text-2xl max-lg:text-sm">{userName}</p>
    </a>
  </section>
  <section class="right">
    <ul
      class="actions px-8 py-0 max-lg:px-4 gap-8 max-lg:gap-4 max-md:gap-1 lg:bg-white lg:rounded-full w-fit self-end"
    >
      {#each actions as action}
        <li class="action max-lg:text-sm max-lg:px-2 px-[1.5rem] py-[0.3rem]">
          <a href={action.link}>{action.name}</a>
        </li>
      {/each}
    </ul>
  </section>
</nav>
