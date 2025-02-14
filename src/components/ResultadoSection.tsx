import { FaPencilAlt } from "react-icons/fa";
import { ProgressBar } from "./ProgressBar";
import { Delivery } from "@/lib/definitions";
import { calculateProgress } from "@/lib/utils";

interface ResultadoSectionProps {
  id: number;
  name: string;
  deliveries: Delivery[];
}

const ResultadoSection = ({ id, name, deliveries }: ResultadoSectionProps) => {
  return (
    <div key={id}>
      <div key={id} className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
        <div className="flex items-center gap-4">
          <ProgressBar progress={calculateProgress(deliveries)} />
          <div className="w-12 h-10 rounded-md border flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
            <FaPencilAlt />
          </div>
        </div>
        {deliveries.length > 0 && (
          <ul className="flex flex-col gap-2">
            {deliveries.map((delivery, index) => (
              <li key={index} className="flex text-sm text-gray-500 justify-between ">
                {delivery.name}
                <span>{delivery.value}%</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResultadoSection;
