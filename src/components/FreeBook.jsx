import React from "react";
import list from "../data/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
const FreeBook = () => {
  const filterBooks = list.filter((item) => item.category === "Free");
  //   console.log(filterBooks);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 my-6">
        <h2 className="font-semibold pb-2 text-xl dark:text-pink-500">Free Offer Courses</h2>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          aperiam atque illum iste quae obcaecati. Lorem ipsum dolor sit amet.
        </p>
        <div>
          <div className="slider-container mx-auto mt-6">
            <Slider {...settings}>
             {filterBooks.map((item)=> <Card item={item} key={item.id}/>)}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
