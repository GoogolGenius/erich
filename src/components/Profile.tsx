import AnchorButton from './AnchorButton';
import './Profile.css';
import { FC, useEffect, useRef, useState } from 'react';

const Profile: FC = (): JSX.Element => {
  const [discordButtonText, setDiscordButtonText] = useState('Discord');
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const handleDiscordButton = (): void => {
    setDiscordButtonText('Copied!');
    navigator.clipboard.writeText('@googlegenius');
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      setDiscordButtonText('Discord');
    }, 1000);
  };
  useEffect(() => clearTimeout(timeoutIdRef.current), []);

  return (
    <div className="Profile">
      <div className="Profile__content">
        <h1 className="Profile__header--primary">
          <span className="underline">Erich Nguyen</span>
        </h1>
        <h2 className="Profile__header--secondary">GoogleGenius</h2>
        <p className="Profile__paragraph">
          A software developer interested in the intersection between 
          computer science and medicine, planning to pursue specialization 
          in computational biology/bioinformatics or other related fields.
          Knowledgable in web development with TypeScript and React.JS, 
          Python, Java, and currently learning C++.
        </p>
      </div>
      <div className="Profile__links">
        <AnchorButton text="GitHub" link="https://github.com/GoogleGenius" />
        <button onClick={handleDiscordButton} className="discord__button">
          {discordButtonText}
        </button>
        <AnchorButton
          text="X"
          link="https://x.com/_GoogleGenius_"
        />
        <AnchorButton
          text="Stack Overflow"
          link="https://stackoverflow.com/users/16394485/googlegenius"
        />
        <AnchorButton text="Email" link="mailto:erich.nguyen@outlook.com" />
      </div>
    </div>
  );
};

export default Profile;
