const RestaurantCategory = ({ detail, count, showItem, setShowIndex }) => {
  const showDetail = () => {
    setShowIndex();
  };
  return (
    <div className="accordion-container">
      <h2>Recommended Discounts {count}</h2>
      <p onClick={showDetail}>👇</p>
      {showItem && (
        <>
          <p>{detail.meta}</p>
          <p>{detail.operationType}</p>
        </>
      )}
    </div>
  );
};

export default RestaurantCategory;
