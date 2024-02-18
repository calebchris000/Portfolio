<script lang="ts">
  import type { NavbarAction } from "types/index";
  import "./style.css";
  export let userName: string = "Caleb Nwaizu";
  export let profileImage: string = "/src/assets/man.png";
  export let actions: NavbarAction[] = [
    { name: "About", link: "/about" },
    { name: "Works", link: "/works" },
    { name: "Contact", link: "/contact" },
  ];
</script>

<nav
  class="nav px-24 max-w-[160rem] min-w-[30rem] mx-auto  max-lg:mx-5 max-lg:p-2 max-lg:px-8 max-lg:bg-white max-lg:rounded-full mt-5"
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
      class="actions gap-8 max-lg:gap-4 lg:bg-white lg:rounded-full w-fit self-end"
    >
      {#each actions as action}
        <li class="action max-lg:text-sm">
          <a href={action.link}>{action.name}</a>
        </li>
      {/each}
    </ul>
  </section>
</nav>
