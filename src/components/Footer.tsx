import './Footer.css';
import { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <div className="Footer">
      Inspired by{' '}
      <a href="https://rxs.to" className="Footer__anchor">
        rxsto
      </a>
      . Sky background created by{' '}
      <a
        href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13451525.htm"
        className="Footer__anchor"
      >
        pikisuperstar
      </a>
      .
    </div>
  );
};

export default Footer;
