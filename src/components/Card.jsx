import React from "react";

const Card = ({item}) => {
  return (
    <><div className="px-2 hover:scale-105 transition-all duration-200 ">
      <div className="card bg-base-100 w-92  shadow-xl dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.desc}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline cursor-pointer">${item.price}</div>
            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 transition-all">Buy Now</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
