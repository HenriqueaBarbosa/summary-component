import Card from "../elements/Card";
import Circle from "../elements/Circle";

export default function CardResult() {
    return (
      <div>
        <Card>
            <h3 className="text-zinc-200">Your Result</h3>

            <Circle>
                <h1 className="text-6xl text-[#FFF]">76</h1>
                <h5 className="text-xs text-zinc-300">of 100</h5>
            </Circle>

            <h2 className="text-xl font-bold text-[#FFF]">Great</h2>

            <h5 className="text-zinc-200 text-center text-sm">You scored higher than 65% of the people who have taken these tests.</h5>
        </Card>
      </div>
    )
  }