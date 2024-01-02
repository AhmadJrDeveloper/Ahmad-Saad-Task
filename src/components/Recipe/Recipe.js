import React, { useState, useEffect } from 'react';
import './Recipe.css';
import Steak from '../../assets/steaks.jpg';
import Chicken from '../../assets/chicken.jpg';
import Duck from '../../assets/duck.jpg';
import Acquacotta from '../../assets/Acquacotta.jpg';
import RecipeElements from '../RecipeElements/RecipeElements';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../HomeLanding/CustomSwiper.css';

function Recipe() {
  const recipes = [
    {
      imageUrl: Steak,
      title: 'Steaks with goulash sauce & sweet potato',
      subtitle: 'Enjoy fillet steak with sauce for a healthy dinner..',
    },
    {
      imageUrl: Acquacotta,
      title: 'Acquacotta',
      subtitle: 'Aquacotta is a hot broth bread soup in ..',
    },
    {
      imageUrl: Duck,
      title: 'Duck ragu with pappardelle & swede',
      subtitle: "There's nothing like a hearty bowl of pasta..",
    },
    {
      imageUrl: Chicken,
      title: 'Jerk chicken salad with papaya',
      subtitle: 'This super easy Caribbean papaya salad recipe..',
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='Recipe-Container'>
        <h2 className='Recipe-Header'>TASTY RECIPES</h2>
        {isMobile ? (
          <Swiper
            direction='horizontal'
            slidesPerView='auto'
            spaceBetween={0}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true, hide: true }}
            cssMode={true}
          >
            {recipes.map((article, index) => (
              <SwiperSlide key={index}>
                <RecipeElements
                  imageUrl={article.imageUrl}
                  title={article.title}
                  subtitle={article.subtitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className='Recipes-Flex'>
            {recipes.map((article, index) => (
              <RecipeElements
                key={index}
                imageUrl={article.imageUrl}
                title={article.title}
                subtitle={article.subtitle}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Recipe;
