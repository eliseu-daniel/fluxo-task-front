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
      <div className='OverviewContent'>
        <div className='OverviewHeader'>
          <h2>{title}</h2>
          <span>{icon}</span>
        </div>
        <div className='OverviewBody'>
          <p className="count">{valueCard}</p>
          <p>{metrics}</p>
        </div>
      </div>
    </div>
  );
}