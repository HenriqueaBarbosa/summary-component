interface Props {
  children: React.ReactNode;
  reaction?: boolean;
  memory?: boolean;
  verbal?: boolean;
  visual?: boolean;
}

export default function Rating(props: Props) {
  return (
    <div
      className={`
        ${props.reaction ? "bg-red-50" : ""}
        ${props.memory ? "bg-yellow-50" : ""}
        ${props.verbal ? "bg-green-50" : ""}
        ${props.visual ? "bg-blue-50" : ""}
        w-full h-16 rounded flex items-center p-2
        `}
    >  
      {props.children}
    </div>
  );
}
