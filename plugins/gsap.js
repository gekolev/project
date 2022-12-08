import Vue from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const GSAP = {
  install(Vue, options) {
    Vue.prototype.$gsap = gsap;
    Vue.prototype.$ScrollTrigger = ScrollTrigger;
    Vue.prototype.$ScrollToPlugin = ScrollToPlugin;
  },
};

Vue.use(GSAP);
