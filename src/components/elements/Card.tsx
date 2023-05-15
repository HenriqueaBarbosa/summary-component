interface Props {
  summary?: boolean;
  children: React.ReactNode;
}
export default function Card(props: Props) {
  return (
    <div
      className={`
            flex flex-col 
            items-center justify-center
            ${
              props.summary
                ? "w-72 h-96 rounded-r-3xl gap-3 p-9"
                : "w-72 h-96 gap-5 pl-11 pr-11 pt-11 pb-6 rounded-3xl bg-gradient-to-t from-[#342DEB] via-indigo-500 to-[#6340FC]"
            }           
        `}
    >
      {props.children}
    </div>
  );
}
