import OpenDialog from "./OpenDialog";
import { Pencil } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { ResultadoChaveForm } from "./forms/ResultadoChaveForm";
import { Results } from "@/lib/definitions";
import { calculateProgress } from "@/lib/utils";

interface ResultadoSectionProps {
  resultado: Results;
}

const ResultadoSection = ({ resultado }: ResultadoSectionProps) => {
  const { id, name, deliveries } = resultado;
  return (
    <div key={id}>
      <div key={id} className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
        <div className="flex items-center gap-4">
          <ProgressBar progress={calculateProgress(deliveries)} />
          <OpenDialog
            description="Preencha os campos para cadastrar um novo Resultado-Chave"
            title="Editar Resultado-Chave"
            icon={<Pencil />}
            className="w-12 h-10 rounded-md border flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors duration-200s"
          >
            <ResultadoChaveForm result={resultado} />
          </OpenDialog>
        </div>
        {deliveries && deliveries.length > 0 && (
          <ul className="flex flex-col gap-2">
            {deliveries.map((delivery, index) => (
              <li
                key={index}
                className="flex text-sm text-gray-500 justify-between "
              >
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
