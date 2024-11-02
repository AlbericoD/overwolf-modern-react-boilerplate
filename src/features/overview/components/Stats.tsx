import "./styles/Stats.css";

type StatsProps = {
  label: string;
  value: number;
};

export const Stats = ({ label, value }: StatsProps) => {
  return (
    <div className="stats">
      <span className="stats__label">{label}</span>
      <span className="stats__value">{value}</span>
    </div>
  );
};
