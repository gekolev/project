<template>
    <div class="wrapper">
      <section>
        <div class="w-full h-screen flex flex-col justify-center items-center bg-black">
          <h1 data-aos="fade-up" data-aos-delay="100" class="text-primary text-white text-6xl md:text-9xl tracking-widest" id="title">V N N</h1>
          <h2 data-aos="fade-up" data-aos-delay="200" class="mt-5 text-white text-2xl md:text-3xl tracking-widest	">D E S I G N</h2>
          <!-- <div class="glitch">GLITCH</div>  -->
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {};

  </script>

<style>
html {
font-family: "Jost";
}
</style>

<!-- <style >
.glitch{
  color:white;
  font-size:100px;
  position:relative;
  width:400px;
  margin:0 auto;
}
@keyframes noise-anim{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.glitch:after{
  content:attr(data-text);
  position:absolute;
  left:2px;
  text-shadow:-1px 0 red;
  top:0;
  color:white;
  background:black;
  overflow:hidden;
  clip:rect(0,900px,0,0); 
  animation:noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.glitch:before{
  content:attr(data-text);
  position:absolute;
  left:-2px;
  text-shadow:1px 0 blue; 
  top:0;
  color:white;
  background:black;
  overflow:hidden;
  clip:rect(0,900px,0,0); 
  animation:noise-anim-2 3s infinite linear alternate-reverse;
}
</style>
   -->
