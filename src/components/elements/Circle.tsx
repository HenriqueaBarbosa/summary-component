interface Props {
    children: React.ReactNode;
}

export default function Circle(props: Props) {
    return (
        <div className={`
            flex flex-col gap-1
            items-center justify-center
            w-36 h-36 rounded-full
            bg-gradient-to-t from-[#4530E7] via-[#462BDB] to-[#4A27D3]
        `}>
            {props.children}
        </div>
    )
}