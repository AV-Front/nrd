<template>
  <div ref="swiper" class="swiper">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Grid } from "swiper";

export default {
  name: "Carousel",
  data() {
    return {
      activeIndex: 0,
    };
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination, Grid],
      loop: false,
      spaceBetween: 20,
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      breakpoints: {
        320: {
          initialSlide: 1,
          spaceBetween: 10,
          grid: {
            rows: 1,
          },
        },
        599: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
        1023: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: (swiper) => {
          this.activeIndex = swiper.realIndex;
        },
      },
    });
  },
};
</script>
<style lang="scss">
.swiper {
  max-width: 100%;
  height: 820px;

  @media (max-width: 599px) {
    height: 400px;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    &:after {
      color: antiquewhite;
    }
    @media (max-width: 599px) {
      display: none;
    }
  }
}
.swiper-slide {
  max-height: 400px;
}
</style>
