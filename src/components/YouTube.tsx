import channels from '../assets/data/channels';
import AnchorButton from './AnchorButton';
import './YouTube.css';
import { FC } from 'react';

const YouTube: FC = (): JSX.Element => {
  return (
    <div className="YouTube">
      {channels.map((channel, index) => (
        <AnchorButton key={index} text={channel.name} link={channel.link} />
      ))}
    </div>
  );
};

export default YouTube;
