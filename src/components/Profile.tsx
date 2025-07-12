import avatar from '../assets/erich-close-headshot.jpeg';
import './Profile.css';
import { FC } from 'react';

const Profile: FC = (): JSX.Element => {
  return (
    <div className="Profile">
      <div className="Profile__left">
        {/* Socials */}
        <div className="Profile__social-icons">
          <a
            href="https://x.com/GoogolGenius"
            className="Profile__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/twitter.svg"
              alt="Twitter"
              className="Profile__social-icon-svg"
            />
          </a>
          <a
            href="https://github.com/GoogolGenius"
            className="Profile__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="Profile__social-icon-svg"
            />
          </a>
          <a
            href="https://stackoverflow.com/users/16394485/googolgenius"
            className="Profile__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/stackoverflow-icon.svg"
              alt="Stack Overflow"
              className="Profile__social-icon-svg"
            />
          </a>
          <a
            href="mailto:erich.nguyen@outlook.com"
            className="Profile__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/mail.svg"
              alt="Email"
              className="Profile__social-icon-svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/erich-nguyen"
            className="Profile__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="Profile__social-icon-svg"
            />
          </a>
          <a
            href="https://discord.com/users/732271287002726402"
            className="Profile__social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/discord.svg"
              alt="Discord"
              className="Profile__social-icon-svg"
            />
          </a>
        </div>

        {/* Profile Card */}
        <div className="Profile__card">
          <img src={avatar} alt="Erich Nguyen" className="Profile__portrait" />
          <h2 className="Profile__name">ERICH NGUYEN</h2>
          <p className="Profile__description">@GoogolGenius</p>
        </div>
      </div>

      <div className="Profile__right">
        <h1 className="Profile__title">STUDENT SOFTWARE DEVELOPER</h1>
        <p className="Profile__bio">
          Student dev focused on the intersection of CS and bio, with interests
          in computational biology and bioinformatics. Experienced in full-stack
          web dev using TypeScript, React.JS, Python, and Java; learning C++.
          Projects span robotics, STEM outreach, and research involving barcoded
          transposon libraries as well as ML models on Marfan syndrome.
        </p>
        <a
          className="Profile__contact-button"
          href="https://www.linkedin.com/in/erich-nguyen"
        >
          CONNECT WITH ME
        </a>
      </div>
    </div>
  );
};

export default Profile;
