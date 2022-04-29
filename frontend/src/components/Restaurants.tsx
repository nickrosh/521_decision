import { useEffect, useState } from "react";


const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        const currentUrl = 'http://localhost:8080/api/v1/search';
        const fetchRestaurants = async () => {
          try {
            const response = await fetch(currentUrl);
            const json = await response.json();
            console.log(json);
            setRestaurants({...json})
          } catch(error) {
            console.error(error);
          }
        };
        fetchRestaurants()
      }, []);


    return (
        <div className="container">
            <div className="text-center bg-dark text-white">
                <h1>What goes here?</h1>
            </div>
        </div>
    );
  }
  
  export default Restaurants;