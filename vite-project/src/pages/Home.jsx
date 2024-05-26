import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
        const [menus, setMenus] = useState([]);
      
        useEffect(() => {
          axios.get('https://api.mudoapi.tech/menus')
            .then(response => {
              setMenus(response.data.data.Data);
            })
            .catch(error => {
              console.error('Error fetching the menus', error);
            });
        }, []);
      
        return (
          <div>
            <h1>ini Home Page</h1>
            <Navbar />
            <ul>
              {menus.map((menu) => (
                <li key={menu.id} style={{ listStyleType: 'none', marginBottom: '20px' }}>
                  <img src={menu.imageUrl} alt={menu.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <div>
                    <h2>{menu.name}</h2>
                    <p>{menu.priceFormatted}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      };

export default Home;
