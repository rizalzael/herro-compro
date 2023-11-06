  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });



  /*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  padding: 70px 0 60px;
}

.counts .count-box {
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
}

.counts .count-box i {
  font-size: 42px;
  line-height: 0;
  margin-right: 20px;
  color: #4154f1;
}

.counts .count-box span {
  font-size: 36px;
  display: block;
  font-weight: 600;
  color: #0b198f;
}

.counts .count-box p {
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
}

/*--------------------------------------------------------------
# Clients
--------------------------------------------------------------*/
.clients .clients-slider .swiper-slide img {
  opacity: 0.5;
  transition: 0.3s;
}

.clients .clients-slider .swiper-slide img:hover {
  opacity: 1;
}

.clients .clients-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.clients .clients-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #4154f1;
}

.clients .clients-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #4154f1;
}
