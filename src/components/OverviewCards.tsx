interface OverviewCardsProps {
  title: string;
  icon?: string;
  valueCard: string;
  metrics: string;
  classname?: string;
}

export default function OverviewCards({ title, icon, valueCard, metrics, classname }: OverviewCardsProps) {
  return (
    <div className={classname || ''}>
      <div className={classname || ''}>
        <div className={classname || ''}>
          <h2>{title}</h2>
          <span>{icon}</span>
        </div>
        <div className={classname || ''}>
          <p>{valueCard}</p>
          <p>{metrics}</p>
        </div>
      </div>
    </div>
  );
}