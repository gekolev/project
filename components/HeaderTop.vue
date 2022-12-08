<template>
  <header class="w-full absolute z-40">
    <nav class="flex justify-center w-full text-white py-4  px-0 sm:px-4 max-w-screen-2xl w-full m-auto text-lg lg:text-xl"
         :class="{ ['bg-black lg:bg-transparent bg-opacity-90']: showMobileMenu }">

      <button
        class="text-white inline-flex p-3 rounded lg:hidden ml-auto hover:text-white outline-none"
        @click.capture="toggleNavigation">
        <i class="material-icons">menu</i>
      </button>

      <div class="bg-black top-navbar w-full lg:top-auto lg:relative lg:inline-flex lg:w-auto">
        <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full items-center flex flex-col lg:h-auto divide-y lg:divide-y-0 divide-gray-700">
          <span class="lg:inline-flex lg:w-auto w-full pl-6 pr-6 lg:pl-0 lg:pr-3 py-3 text-lg lg:text-md font-bold cursor-pointer" @click.stop="scrollTo('#portfolio')">portfolio</span>
          <span class="lg:inline-flex lg:w-auto w-full px-6 lg:px-3 py-3 text-lg lg:text-md font-bold cursor-pointer" @click.stop="scrollTo('#studio')">studio</span>
          <span class="lg:inline-flex lg:w-auto w-full px-6 lg:px-3 py-3 text-lg lg:text-md font-bold cursor-pointer" @click.stop="scrollTo('#about')">about</span>
          <span class="lg:inline-flex lg:w-auto w-full px-6 lg:px-3 py-3 text-lg lg:text-md font-bold cursor-pointer" @click.stop="scrollTo('#contact')">contact</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    props: {
      hideNav: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        showMobileMenu: false
      }
    },
    mounted() {
  
    },
    methods: {
      toggleNavigation() {
        this.showMobileMenu = !this.showMobileMenu;
      },
      scrollTo(id) {
        this.showMobileMenu = false;
        this.$gsap.to(window, {duration: 1, scrollTo: {y: id, offsetY:0}});
      }
    }
  };

</script>

<!-- <style lang="scss">
a.active-link {
  font-weight: 600;
}
</style>

<style lang="scss" module>

.navigation {
  top: 80px;

  @media screen and (min-width:1024px) {
    top: auto;
  }
}
</style> -->
