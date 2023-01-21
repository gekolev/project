<template>
  <div class="wrapper" id="portfolio">
    <section>
      <div class="hidden md:block w-screen h-screen">
        <h2 data-aos="fade-up" data-aos-delay="100" class="pt-10 pl-10 text-primary text-black text-7xl md:text-8xl">
          {{ $t('portfolioHeadline') }}</h2>
          <div class="container"> 
    <img src="~/static/green.webp" class="object w-1/4 green" data-value="6" alt="green sleeve" />
    <img src="~/static/peony.webp" class="object w-1/5 peony" data-value="4" alt="silk detail" />
    <img src="~/static/triple.webp" class="object w-1/4 triple" data-value="-6" alt="three dresses" />
    <img src="~/static/pink.webp" class="object w-1/4 pink" data-value="8" alt="pink detail" />
  </div>
      </div>
      <div class="hidden md:block w-screen h-screen">
          <div class="container"> 
    <img src="~/static/dstm.webp" class="object w-1/4 dstm" data-value="6" alt="black detail" />
    <img src="~/static/black.webp" class="object w-1/5 black" data-value="4" alt="black detail" />
    <img src="~/static/orangepinkblack.webp" class="object w-1/4 orange" data-value="-6" alt="three details" />
    <img src="~/static/whitepink.webp" class="object w-1/5 whitepink" data-value="-6" alt="silk" />
    <img src="" class="object" data-value="8" alt="" />
  </div>
      </div>
      <div class="block md:hidden w-screen h-full">
        <h2 data-aos="fade-up" data-aos-delay="100" class="text text-primary text-black text-6xl md:text-7xl md:text-8xl">
          {{ $t('portfolioHeadline') }}</h2>
          <div class="flex flex-col"> 
    <img src="~/static/pink.webp" class="w-full pink2"  alt="pink detail" />
    <img src="~/static/orangepinkblack.webp" class="w-full orangepink2" alt="three details" />
    <img src="~/static/peony.webp" class="w-full peony2" alt="silk detail" />
    <img src="~/static/triple.webp" class="w-full triple2" alt="three dresses" />
    <img src="~/static/whitepink.webp" class="w-full whitepink2" data-value="-6" alt="silk" />
  </div>
      </div>
    </section>
  </div>
</template>
  
<script>
export default {
  mounted() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");

        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }
  },
  methods: {

  }
};
</script>
  
<style scoped>


  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.container{
  position: relative;
  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
}
.container img{
  position: absolute;
  height:100%;
  object-fit:contain;
}
.container h2{
  z-index: 1;
  position: relative;
  color:#fff;
  font-size:90px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing:32px;
  line-height:60px;
}

.green{
  bottom: 20%;
  left: 2%;
}

.peony{
  top: 28%;
  left: 25%;
}

.triple{
  right: 26%;
  bottom: 20%;
}

.pink {
  right: 0%;
  top: 25%;
}

.dstm {
  right: 0%;
  top: 10%;
}

.black {
  left: 1%;
  bottom: 15%;
}

.orange {
  right: 25%;
  bottom: 30%;
}

.whitepink {
  left: 25%;
  top: 15%;
}

.pink2 {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.peony2 {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.triple2 {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.orangepink2 {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.whitepink2 {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
}

.text {
  padding-top: 5px;
  padding-left: 10px
}

@media(max-width:800px){

  .container h2 span{
    font-size:26px;
  }
  .container h2{
    font-size:60px;
    letter-spacing:19px;
    line-height:35px;
  }
}


</style>
  