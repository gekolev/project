<template>
  <div class="wrapper" id="portfolio">
    <section>
      <div class="hidden md:block w-screen h-screen">
        <h2 data-aos="fade-up" data-aos-delay="100" class="pt-10 pl-10 text-primary text-black text-5xl md:text-8xl">
          {{ $t('portfolioHeadline') }}</h2>
          <div class="container"> 
    <img src="~/static/orange.png" class="object w-1/4 orange" data-value="6" alt="orange top" />
    <img src="~/static/pink.webp" class="object w-1/4 peony" data-value="4" alt="silk detail" />
    <img src="~/static/blue-top.png" class="object w-1/4 triple" data-value="-6" alt="blue top" />
    <img src="~/static/pink-orange.png" class="object w-1/3 pink" data-value="20" alt="pink orange swimwear" />
    <img src="~/static/black-dress.png" class="object w-1/4 orange-dress" data-value="20" alt="black dress" />
  </div>
      </div>
      <div class="hidden md:block w-screen h-screen">
          <div class="container"> 
    <img src="~/static/purple-dress.png" class="object w-1/4 dstm" data-value="6" alt="purple dress" />
    <img src="~/static/white-dress.png" class="object w-1/5 black" data-value="4" alt="white dress" />
    <img src="~/static/bw-bottom.png" class="object w-1/4 bw" data-value="-6" alt="black and white bottom" />
    <img src="~/static/green-dress3.png" class="object w-1/3 whitepink" data-value="-6" alt="green dress" />
    <img src="" class="object" data-value="8" alt="" />
  </div>
      </div>
      <div class="block md:hidden w-screen h-full">
        <h2 data-aos="fade-up" data-aos-delay="100" class="text text-primary text-black text-5xl md:text-7xl md:text-8xl">
          {{ $t('portfolioHeadline') }}</h2>
          <div class="flex flex-col"> 
    <!-- <img src="~/static/pink.webp" class="w-full pink2"  alt="pink detail" /> -->
    <img src="~/static/pink-orange.png" class="w-full orangepink2" alt="pink orange swimwear" />
    <img src="~/static/green-dress3.png" class="w-full whitepink2" data-value="-6" alt="green dress" />
    <img src="~/static/white-top.png" class="w-full peony2" alt="white top" />
    <img src="~/static/blue-top.png" class="w-full peony2" alt="blue top" />
    
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

.orange{
  bottom: 20%;
  left: 2%;
}


.triple{
  right: 35%;
  bottom: 27%;
}

.orange-dress {
  top: 17%;
  left: 25%;
}

.peony{
  right: 1%;
  bottom: 35%;
}

.bw {
  right: 30%;
  bottom: 5%;
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
  bottom: 20%;
}

.orange {
  right: 25%;
  bottom: 30%;
}

.whitepink {
  left: 25%;
  top: 32%;
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
  