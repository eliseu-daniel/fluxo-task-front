interface WidgetProps {
  classname?: string;
  children: React.ReactNode;
}

export default function Widget({ classname, children  }: WidgetProps) {
  return (
    <div className={classname || ''}>
      {children}
    </div>
  );
}