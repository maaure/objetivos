import { ObjetivoCard } from "@/components/ObjetivoCard";
import { Objetivo } from "@/lib/definitions";

export default async function Home() {
  const response = await fetch("https://67afcdd7dffcd88a678793f6.mockapi.io/api/okrs");
  const data: Objetivo[] = await response.json();

  return (
    <>
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
          {data.map((okr) => (
            <ObjetivoCard key={okr.id} okr={okr} />
          ))}
        </div>
      </div>
    </>
  );
}
