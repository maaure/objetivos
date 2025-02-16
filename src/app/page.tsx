import { NovoObjetivoFormDialog } from "@/components/forms/NovoObjetivoFormDialog";
import { ObjetivoCard } from "@/components/painel/ObjetivoCard";
import { getAllOKRs } from "@/lib/api";

export default async function Home() {
  const data = await getAllOKRs();

  return (
    <>
      <div className="container m-auto my-6">
        <h2 className="text-xl text-gray-800 font-semibold">Lista de OKRs</h2>
        <div className="flex flex-row-reverse pb-6">
          <NovoObjetivoFormDialog />
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
