<template>
  <div class="min-h-screen bg-cover bg-no-repeat bg-center">
    
    <HeaderTop :hideNav="true"/>

    <HeroSection :isMobile="mobile" />
    <PortfolioSection />
    <StudioSection :isMobile="mobile"/>
    <AboutSection />
    <ContactSection />
    <!-- <ScheduleSection />
    <TicketSection :isMobile="mobile" :isTablet="tablet"/>
    <PartnerSection :isMobile="mobile"/> -->

    <NavBottom />
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
    mounted() {
        this.mobile = window.innerWidth < 900;
        this.tablet = window.innerWindth > 900 < 1200;
    },
}
</script>
<!-- 
<style lang="scss" module>
.bg {
  background-color: #A7A28C;
}
</style> -->
