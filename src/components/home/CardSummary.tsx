import { IconCloudComputing, IconEye, IconMeteor, IconUsersGroup } from "@tabler/icons-react";
import Button from "../elements/Button";
import Card from "../elements/Card";
import Rating from "../elements/Rating";

export default function CardSummary() {
    return (
      <div className={`
        
      `}>
        <Card summary>

            <div className="flex w-full font-semibold mt-4">
                <h3>Summary</h3>
            </div>

            <Rating reaction>
                <div className="ml-2 mr-1 text-red-500"><IconMeteor stroke={1} size={22}/></div>
                <div className="ml-2 font-semibold text-red-500">Reaction</div>
                <div className="flex w-full justify-end mr-1 text-[#333] font-semibold text-sm">80</div>
                <div className="text-zinc-400 mr-2 text-xs">/100</div> 
            </Rating>
            <Rating memory>
                <div className="ml-2 mr-1 text-yellow-500"><IconCloudComputing stroke={1} size={22} /></div>
                <div className="ml-2 font-semibold text-yellow-500">Memory</div>
                <div className="flex w-full justify-end mr-1 text-[#333] font-semibold text-sm">92</div>
                <div className="text-zinc-400 mr-2 text-xs">/100</div>
            </Rating>
            <Rating verbal>
                <div className="ml-2 mr-1 text-green-500"><IconUsersGroup stroke={1} size={22} /></div>
                <div className="ml-2 font-semibold text-green-500">Verbal</div>
                <div className="flex w-full justify-end mr-1 text-[#333] font-semibold text-sm">61</div>
                <div className="text-zinc-400 mr-2 text-xs">/100</div>
            </Rating>
            <Rating visual>
                <div className="ml-2 mr-1 text-blue-500"><IconEye stroke={1} size={22} /></div>
                <div className="ml-2 font-semibold text-blue-500">Visual</div>
                <div className="flex w-full justify-end mr-1 text-[#333] font-semibold text-sm">72</div>
                <div className="text-zinc-400 mr-2 text-xs">/100</div>
            </Rating>

            <Button content="Continue" />
        </Card>
      </div>
    )
  }