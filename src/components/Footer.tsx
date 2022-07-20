import links from '../data/links';
import './Footer.css';
import { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        Inspired by{' '}
        <a
          href={links.rxsto}
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__anchor"
        >
          rxsto
        </a>
        . Sky background created by{' '}
        <a
          href={links.pikisuperstar}
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__anchor"
        >
          pikisuperstar
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
