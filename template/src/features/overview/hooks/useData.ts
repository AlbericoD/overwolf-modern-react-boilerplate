import { RootReducer } from "app/shared/rootReducer";
import { useMemo } from "react";
import { useSelector } from "react-redux";

type Attributes = {
  quantity: number;
  label: string;
};
type DataLabel = "events" | "infos";
type Data = Record<DataLabel, Attributes>;

const getAveragePerMinute = (quantity: number) =>
  `${Math.floor(quantity ?? 1 / 60)} per minute`;

export const useData = () => {
  const { events, infos } = useSelector(
    (state: RootReducer) => state.background
  );

  const data: Data = useMemo(() => {
    const eventsQuantity = events.length;
    const infosQuantity = infos.length;

    return {
      events: {
        quantity: eventsQuantity,
        label: `Events (${getAveragePerMinute(eventsQuantity)})`,
      },
      infos: {
        quantity: infosQuantity,
        label: `Infos (${getAveragePerMinute(infosQuantity)})`,
      },
    };
  }, [events, infos]);

  return data;
};
