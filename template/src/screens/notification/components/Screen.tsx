import { Title } from "components/Title/Title";
import { Overview } from "features/overview";
import "./styles/Screen.css";

const Screen = () => {
  return (
    <div className='notification'>
      <Title color='white'>Notification Screen</Title>
      <Overview />
    </div>
  );
};

export default Screen;
