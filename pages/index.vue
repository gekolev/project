<template>
  <div class="min-h-screen bg-cover bg-no-repeat bg-center">
    <!-- <Lang /> -->
    <HeaderTop :hideNav="true"/>

    <HeroSection :isMobile="mobile" />
    <PortfolioSection />
    <AboutSection />
    <StudioSection :isMobile="mobile"/>
    <ContactSection />
  </div>
</template>

<script>
// import Video from '../components/VideoComponent.vue';%
export default {
    name: "IndexPage",
    data() {
        return {
            mobile: false,
            tablet: false
        };
    },
    // mounted() {
    //     this.mobile = !
        // this.tablet = window.innerWindth > 800 < 1200;
    // },
}
</script>
<!-- 
<style lang="scss" module>
.bg {
  background-color: #A7A28C;
}
</style> -->
