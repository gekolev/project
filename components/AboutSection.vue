<template>
  <div class="wrapper" id="about">
    <section>
      <div class="w-full bg-salmon">
        <div class="relative flex flex-col md:flex-row">
          <h2 data-aos="fade-up" data-aos-delay="300" class="absolute md:inset-0 pt-10 pl-10 lg:text-center text-white lg:text-black text-7xl text-6xl lg:text-8xl">
            {{ $t('aboutHeadline') }}</h2>
          <img class="w-full md:w-1/2 " src="~/static/mirror.jpeg" alt="design studio" />
          <div class="w-full md:w-1/2 my-1 md:my-5 py-10 flex justify-center items-center">
          <p data-aos="fade-up" data-aos-delay="300" class="w-full text-center pt-5 md:pt-20 px-5 text-2xl md:text-3xl text-black">
            {{ $t('aboutText') }}
          </p>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style lang=""></style>