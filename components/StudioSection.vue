<template>
  <div class="wrapper" id="studio">
    <section>
      <div class="w-screen h-auto	 md:min-h-screen">
        <h2 data-aos="fade-up" data-aos-delay="300"
          class="pt-10 pl-10 text-primary text-center text-black text-7xl md:text-8xl">{{ $t('studioHeadline') }}</h2>
        <p data-aos="fade-up" data-aos-delay="400" class="px-10 pt-5 md:pt-16 text-center text-2xl md:text-3xl text-black">
          {{ $t('studioText') }}
        </p>
        <div class="flex flex-col">
          <span data-aos="fade-up" data-aos-delay="300" class="mt-20 md:mt-40 flex justify-center uppercase box">{{ $t('clients') }}</span>
          <div class="flex flex-col items-center justify-center">
              <img data-aos="fade-up" data-aos-delay="400" class="w-1/4 lg:w-1/6 pt-5" src="~/static/more-logo.png">
            <img data-aos="fade-up" data-aos-delay="400" class="w-1/4 md:w-1/12 pt-5" src="~/static/dstm-logo.png">
            <h2 data-aos="fade-up" data-aos-delay="400" class="text-3xl pt-5">Mr. Pizza</h2>
          </div>
        </div>
      </div>
      <div class="flex flex-col pt-10">
        <img src="~/static/studio.webp" alt="tailor studio" />
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";

export default {

};
</script>

<style>
.box {
  color: red;
}
</style>
