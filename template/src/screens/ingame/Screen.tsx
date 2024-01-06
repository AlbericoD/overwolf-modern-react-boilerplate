import { RootReducer } from "app/rootReducer";
import { Feed } from "components/Feed";
import { Title } from "components/Title/Title";
import { useSelector } from "react-redux";
import "./Screen.css";

const Screen = () => {
  const { event, info } = useSelector((state: RootReducer) => state.background);

  return (
    <div className='ingame'>
      <Title color='white'>InGame Screen</Title>
      <Feed
        title='Events'
        data={event.length ? event[0] : { content: "No events yet" }}
      />
      <Feed
        title='Infos'
        data={Object.keys(info).length ? info : { content: "No infos yet" }}
      />
    </div>
  );
};

export default Screen;
