import { FeedItem } from "./FeedItem";
import "./Feed.css";

export function Feed({ title, data }: FeedProps) {
  return (
    <div className="feed-container">
      <p>{title}</p>
      <ul>
        <FeedItem content={JSON.stringify(data, null, 2)} />
      </ul>
    </div>
  );
}
