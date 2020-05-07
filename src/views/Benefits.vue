<template>
<div>
    <transition-group name='fade' tag='div'>
      <div v-for="i in [currentIndex]" :key='i'>
        <img class='slider-img' :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href='#'>&#10094;</a>
    <a class="next" @click="next" href='#'>&#10095;</a>
  </div>
</template>

<script>

export default {
  name: 'Benefits',
  data() {
    return {
      images: [
        'https://www.solventa.com.ar/blog/wp-content/uploads/2019/07/prestamo-personales-700x300.gif',
        'https://www.tarjetacruzverde.cl/image/journal/article?img_id=283562&t=1588601887193',
        'https://www.tarjetacruzverde.cl/image/journal/article?img_id=283561&t=1588601887193',
        'https://www.tarjetacruzverde.cl/image/journal/article?img_id=193559&t=1542267575097'
        ],
      timer: null,
      currentIndex: 0,
    }
  },
  
    mounted: function() {
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
         this.timer = setInterval(this.next, 3000);
      },
  
      next: function() {
        this.currentIndex += 1
      },
      prev: function() {
        this.currentIndex -= 1
      }
    },
  
    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  
}
</script>