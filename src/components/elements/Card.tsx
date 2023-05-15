interface Props {
  summary?: boolean;
  children: React.ReactNode;
}
export default function Card(props: Props) {
  return (
    <div
      className={`
            flex flex-col gap-5 p-8
            items-center justify-center
            ${
              props.summary
                ? "w-72 h-96 rounded-r-3xl"
                : "w-72 h-96 rounded-3xl bg-gradient-to-t from-[#342DEB] via-[#5B3EFA] to-[#6340FC]"
            }           
        `}
    >
      {props.children}
    </div>
  );
}
