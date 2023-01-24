<template>
  <header class="w-full absolute z-40">
    <nav class="relative flex justify-center w-full text-white py-4  px-0 sm:px-4 max-w-screen-2xl w-full m-auto text-md md:text-xl"
         :class="{ ['bg-black md:bg-transparent bg-opacity-90']: showMobileMenu }">

         <button
         :class="{ ['hidden']: showMobileMenu }"
        class="text-white inline-flex p-3 md:hidden ml-auto outline-none"
        @click.capture="toggleNavigation">
        <i class="">menu</i>
      </button>
      <Lang class="absolute left-3 top-6"/>
      <div class="z-10 bg-black top-navbar w-full md:top-auto md:relative md:inline-flex md:w-auto navigation" :class="[{ 'hidden': !showMobileMenu }]">
        <div class=" md:inline-flex md:flex-row md:ml-auto md:w-auto w-full items-center flex flex-col md:h-auto divide-y md:divide-y-0 divide-gray-700">
          <span class="md:inline-flex md:w-auto w-full pl-6 pr-6 md:pl-0 md:pr-3 py-3 text-md md:text-md font-bold cursor-pointer" @click.stop="scrollTo('#portfolio')">{{ $t('portfolionav') }}</span>
          <span class="md:inline-flex md:w-auto w-full px-6 md:px-3 py-3 text-md md:text-md font-bold cursor-pointer" @click.stop="scrollTo('#about')">{{ $t('aboutnav') }}</span>
          <span class="md:inline-flex md:w-auto w-full px-6 md:px-3 py-3 text-md md:text-md font-bold cursor-pointer" @click.stop="scrollTo('#studio')">{{ $t('studionav') }}</span>
          <span class="md:inline-flex md:w-auto w-full px-6 md:px-3 py-3 text-md md:text-md font-bold cursor-pointer" @click.stop="scrollTo('#contact')">{{ $t('contactnav') }}</span>
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

<style>

@media only screen and (max-width: 600px) {
.navigation{
  
}
}
</style>