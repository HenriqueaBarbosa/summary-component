interface Props {
    children: React.ReactNode;
}

export default function Circle(props: Props) {
    return (
        <div className={`
            flex flex-col gap-1
            items-center justify-center
            w-32 h-32 rounded-full shadow-2xl shadow-indigo-500
            bg-gradient-to-b from-[#4530E7] via-[#462BDB] to-indigo-500
        `}>
            {props.children}
        </div>
    )
}