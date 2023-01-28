<template>
    <div class="wrapper" id="contact">
        <div class="w-screen bg-black">
            <p class="text-white text-center px-10 py-10">{{ $t('signUP') }}</p>
            <form class="w-full px-5">
                <div class="border flex justify-between px-5 py-10">
                    <div class="w-full flex flex-row">
                        <input id="form-input" type="text" name="form-input" placeholder="Enter your email address"
                            maxlength="" class="w-full bg-black text-white outline-none">
                    </div>
                    <button role="button" class="text-white  ">
                        <div class="w-full justify-end flex">
                            <img class="pr-3" src="~/static/Union.png">
                            <span class="whitespace-nowrap	 text-base md:text-lg">Count me in</span>
                        </div>
                    </button>
                </div>
            </form>
            <div class="flex flex-row justify-between px-5">
                <span class="text-white text-sm md:text-2xl uppercase pt-24">{{ $t('getinTouch') }}</span>
                <ul class="flex flex-col pt-16 text-right text-white">
                    <li>
                        <a href="mailto:valianikolowa@gmail.com" class="text-sm md:text-lg">valianikolowa@gmail.com</a>
                    </li>
                    <li>
                        <a href="tel:+359898385058" class="text-sm md:text-lg">+359 89838 5058</a>
                    </li>
                    <li class="pb-10">
                        <a class="text-sm md:text-lg">{{ $t('address') }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {};
</script>
  
<style lang=""></style>