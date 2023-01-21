<template>
  <div class="wrapper" id="studio">
    <section>
      <div class="w-screen min-h-screen">
        <h2 data-aos="fade-up" data-aos-delay="200"
          class="pt-10 pl-10 text-primary text-center text-black text-7xl md:text-8xl">STUDIO</h2>
        <p data-aos="fade-up" data-aos-delay="400" class="px-10 pt-16 text-center text-4xl md:text-5xl text-black">
          A Bulgarian based <span class="font-bold"> tailoring </span> studio run by Valentina Nikolova. Her work
          focusses on delivering unique collections.
        </p>
        <div class="flex flex-col">
          <span data-aos="fade-up" data-aos-delay="300" class="mt-40 flex justify-center uppercase box">Clients</span>
          <div class="flex flex-col items-center justify-center">
              <img data-aos="fade-up" data-aos-delay="400" class="w-1/4 lg:w-1/6 pt-5" src="~/static/more-logo.png">
            <img data-aos="fade-up" data-aos-delay="400" class="w-1/4 md:w-1/6 pt-5" src="~/static/dstm-logo.png">
          </div>
        </div>
      </div>
      <div class="pt-10 flex flex-col">
        <!-- <span class="text-black">Mr. Pizza</span> -->
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
