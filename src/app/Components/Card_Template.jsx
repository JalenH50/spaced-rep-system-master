'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/CardTemplate.module.scss';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Card_Template({ cards }) {
  const [counter, setCounter] = useState(0);
  const [attack, setAttack] = useState('');
  const [percentage, setPercentage] = useState(0);

  // Ensure that cards are available before trying to access them
  useEffect(() => {
    if (cards.length > 0) {
      setAttack(cards[counter].question);
    }
  }, [cards, counter]); // Re-run when `cards` or `counter` changes

  const flipCard = () => {
    if (attack === cards[counter]?.question) {
      setAttack(cards[counter].answer);
    } else if (attack === cards[counter]?.answer) {
      setAttack(cards[counter].question);
    }
  };

  const changeCard = () => {
    setCounter((prev) => {
      const nextCounter = prev + 1;
      if (nextCounter < cards.length) {
        setAttack(cards[nextCounter].question);
      } else {
        // If we've reached the last card, you might want to reset or loop
        setAttack(cards[0].question); // Loop back to the first card
      }
      return nextCounter;
    });
  };

  return (
    <main>
      {cards.length > 0 ? (
        <div className="cards-display">
          <div onClick={flipCard} className={styles.cardTemplate}>
            <div id="card-id" dangerouslySetInnerHTML={{ __html: attack }}></div>
          </div>
          <button onClick={changeCard}>Next</button>
        </div>
      ) : (
        <p>Loading cards...</p>
      )}
      <div className="difficulty-description">
        <p>How difficult is this card?</p>
      </div>
      <div className="level-buttons">
        <button className="easy">Easy</button>
        <button className="medium">Medium</button>
        <button className="hard">Hard</button>
      </div>
    </main>
  );
}
