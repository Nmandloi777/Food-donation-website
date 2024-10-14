import React, { useEffect, useState } from 'react';
import './AdminDisplay.css';

export default function AdminDisplay() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://meal-rescue-india-default-rtdb.firebaseio.com/Fooddata.json');
      const data = await response.json();

      // Convert data to an array using Object.values
      const dataArray = Array.isArray(data) ? data : Object.values(data);

      setFoodItems(dataArray);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      const response = await fetch(`https://meal-rescue-india-default-rtdb.firebaseio.com/Fooddata/${itemId}.json`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Item deleted successfully');
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item', error);
    }
  };

  const handleDecline = async (itemId) => {
    // Call the deleteItem function to delete the item from the database
    await deleteItem(itemId);

    // Update the state to exclude the deleted item
    setFoodItems((prevItems) => prevItems.filter((item) => item.key !== itemId));
  };

  return (
    <div>
      {foodItems.map((item) => (
        <div className='output' key={item.key}>
          <div className='list'>
            <h1>{item.food}</h1>
          </div>
          <div className='list'>
            <h1>{item.manufacturingDate}</h1>
          </div>
          <div className='list'>
            <h1>{item.expiry}</h1>
          </div>
          <div className='list'>
            <h1>{item.location}</h1>
          </div>
          <button
            key={`decline-${item.id}`} // Add a unique key prop here
            onClick={() => { handleDecline(item.id); }}
            className='button-68'
            style={{ backgroundColor: '#C20114' }}
          >
            Decline
          </button>
          <button
            key={`accept-${item.key}`} // Add a unique key prop here
            className='button-68'
            style={{ backgroundColor: '#4DA167' }}
          >
            Accept
          </button>
        </div>
      ))}
    </div>
  );
}
