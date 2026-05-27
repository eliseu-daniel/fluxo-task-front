interface ButtonsProps {
  text: string;
  className?: string;
  icon?: string;
}

export default function Buttons({ text, className, icon }: ButtonsProps) {
  return (
    <div className={className || ''}>
      <span className={className || ''}>{icon}</span>
      <button>{text}</button>
    </div>
  );
}