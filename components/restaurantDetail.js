import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./restaurantCategory";
const RestaurantDetail = () => {
  const params = useParams();
  const [resData, setResData] = useState(null);
  const [showIndex, setShowIndex] = useState(0);

  let resId = params.resId;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4836015&lng=78.4222559&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResData(json?.data?.cards?.[2]?.card?.card?.info);
  };
  if (!resData) return "";
  const descriptionList = resData?.aggregatedDiscountInfo?.descriptionList;

  return (
    <div className="detail-container">
      <h1>{resData.name}</h1>
      <p>{resData.city}</p>
      <p>{resData.cuisines.join(",")}</p>
      <h2>Please check Discounts Below</h2>
      {descriptionList.map((item, index) => (
        <RestaurantCategory
          detail={item}
          count={index + 1}
          key={resData.id + index}
          showItem={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantDetail;
