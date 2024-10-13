import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxToolKit/cartSlice";
const RestaurantCategory = ({ detail, count, showItem, setShowIndex }) => {
  const dispatch = useDispatch();
  const showDetail = () => {
    setShowIndex();
  };
  const pushStore = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="accordion-container">
      <h2>Recommended Discounts {count}</h2>
      <p onClick={showDetail}>👇</p>
      {showItem && (
        <div onClick={() => pushStore(detail)}>
          <p>{detail.meta}</p>
          <p>{detail.operationType}</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
