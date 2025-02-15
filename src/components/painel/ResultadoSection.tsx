import { Pencil } from "lucide-react";
import { ProgressBar } from "../ui/progress-bar";
import { ResultadoChaveFormDialog } from "../forms/ResultadoChaveFormDialog";
import { Results } from "@/lib/definitions";
import { calculateProgress } from "@/lib/utils";

interface ResultadoSectionProps {
  resultado: Results;
  onEdit: () => void;
}

const ResultadoSection = ({ resultado, onEdit }: ResultadoSectionProps) => {
  const { id, name, deliveries } = resultado;
  return (
    <div key={id}>
      <div key={id} className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
        <div className="flex items-center gap-4">
          <ProgressBar progress={calculateProgress(deliveries)} />

          <ResultadoChaveFormDialog
            icon={<Pencil height={"20px"} />}
            className="self-end text-cyan-800 w-12 h-10 rounded-md border flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200s"
            result={resultado}
            onSuccess={onEdit}
          />
        </div>
        {deliveries && deliveries.length > 0 && (
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
