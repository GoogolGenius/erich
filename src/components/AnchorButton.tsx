import './AnchorButton.css';
import { FC } from 'react';

interface AnchorButtonProps {
  text: string;
  link: string;
}

const AnchorButton: FC<AnchorButtonProps> = ({ text, link }): JSX.Element => {
  return (
    <div className="AnchorButton">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="AnchorButton__anchor"
      >
        {text}
      </a>
    </div>
  );
};

export default AnchorButton;
