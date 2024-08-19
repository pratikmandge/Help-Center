import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cards');
        setCards(response.data);
        setFilteredCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    setFilteredCards(
      cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, cards]);

  return (
    <main>
      <div id="search-block">
        <p>How can we help?</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <span className="search-arrow">→</span>
        </div>
      </div>
      <div className="card-container">
        {filteredCards.map(card => (
          <Link to={card.link} key={card.id} className="card">
            <h3>{card.title}</h3>
            <hr />
            <p>{card.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default CardList;
