import Card from "./card";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";
const Body = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const { user, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4836015&lng=78.4222559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (!restaurants) return "";

  return (
    <div className="container">
      <input
        type="text"
        placeholder="change user name"
        value={user}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />

      <div className="filter">
        <input
          type="text"
          placeholder="search"
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterRestaurant = restaurants.filter((item) => {
              return item.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase());
            });
            setFilteredRestaurants(filterRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const filterRestaurant = restaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 4;
          });
          setFilteredRestaurants(filterRestaurant);
        }}
      >
        Top Rated restaurants
      </button>
      <div className="main-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={`/city/hyderabad/${restaurant.info.id}`}
            >
              <Card restaurant={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
