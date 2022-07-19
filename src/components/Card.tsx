import './Card.css';
import { FC } from 'react';

interface CardProps {
  name: string;
  description: string;
  link: string;
}

const Card: FC<CardProps> = ({ name, description, link }): JSX.Element => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="Card">
      <h1 className="Card__header">{name}</h1>
      <p className="Card__description">{description}</p>
    </a>
  );
};

export default Card;
