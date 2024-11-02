import { RootReducer } from "app/shared/rootReducer";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { fromNow } from "lib/utils";

type Attributes = {
  quantity: number;
  label: string;
};
type DataLabel = "events" | "infos";
type Data = Record<DataLabel, Attributes>;

const getUpdatedAt = (date: number): string => `updated: ${fromNow(date)}`;

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
        label: `Events (${getUpdatedAt(
          events[eventsQuantity - 1]?.timestamp ?? Date.now()
        )})`,
      },
      infos: {
        quantity: infosQuantity,
        label: `Infos (${getUpdatedAt(
          infos[infosQuantity - 1]?.timestamp ?? Date.now()
        )})`,
      },
    };
  }, [events, infos]);

  return data;
};
