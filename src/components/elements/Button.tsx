interface Props {
    content: string;
}
export default function Button({ content }: Props) {
    return (
        <div className={`
            flex flex-col p-2 hover:text-zinc-300 hover:bg-slate-700
            items-center justify-center
            w-full h-16 rounded-3xl text-[#FFF]
            bg-[#4232EE]
        `}>
            {content}
        </div>
    )
}