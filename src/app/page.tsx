import { NovoObjetivoForm } from "@/components/forms/NovoObjetivoForm";
import { ObjetivoCard } from "@/components/painel/ObjetivoCard";
import OpenDialog from "@/components/painel/OpenDialog";
import { getAllOKRs } from "@/lib/api";
import { Plus } from "lucide-react";

export default async function Home() {
  const data = await getAllOKRs();

  return (
    <>
      <div className="container m-auto my-6">
        <h2 className="text-xl text-gray-800 font-semibold">Lista de OKRs</h2>
        <div className="flex flex-row-reverse pb-6">
          <OpenDialog
            title="Criar Novo Objetivo"
            description="Preencha os campos abaixo para criar um novo objetivo"
            label="Criar Objetivo"
            icon={<Plus />}
            className="transition-colors duration-300 p-2 rounded-lg bg-cyan-600 hover:bg-cyan-800 text-white"
          >
            <NovoObjetivoForm />
          </OpenDialog>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
          {data.map((okr) => (
            <ObjetivoCard key={okr.id} okr={okr} />
          ))}
        </div>
      </div>
    </>
  );
}
