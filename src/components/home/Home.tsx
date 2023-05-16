import CardResult from "./CardResult";
import CardSummary from "./CardSummary";

export default function Home() {
    return (
      <div className={`
        flex items-center justify-center
        h-screen w-screen
      `}>
        <div className={`
        flex rounded-3xl flex-wrap m-8
        shadow-2xl shadow-indigo-100
      `}>
            <CardResult />
            <CardSummary />
        </div>
        
      </div>
    )
  }