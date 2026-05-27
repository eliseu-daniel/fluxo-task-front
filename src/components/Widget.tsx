interface WidgetProps {
  titleWidget: string;
  classname?: string;
}

export default function Widget({ titleWidget, classname }: WidgetProps) {
  return (
    <div className={classname || ''}>
      <h2>{titleWidget}</h2>
    </div>
  );
}