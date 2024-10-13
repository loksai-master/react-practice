import { ImagePath } from "../utils/consts";

const Card = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={ImagePath + restaurant.info.cloudinaryImageId} />
      <p>{restaurant.info.name}</p>
      <p>
        {restaurant.info.locality}, {restaurant.info.areaName}
      </p>
      <p>{restaurant.info.avgRating}</p>
      <p>{restaurant.info.cuisines.join(",")}</p>
    </div>
  );
};

export default Card;
