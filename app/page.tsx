import BillionCard, { IListBillion } from "@/components/billion-card";
import { notFound } from "next/navigation";

async function getBillions(): Promise<IListBillion> {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const billions = await getBillions();
  if (!billions) return notFound();
  return (
    <div className="">
      <div className="space-y-0.5 sm:space-y-1">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center">
          {billions.map((billion: IListBillion) => (
            <BillionCard key={billion.id} {...billion} />
          ))}
        </div>
      </div>
    </div>
  );
}
