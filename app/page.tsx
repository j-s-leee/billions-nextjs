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
      <div className="grid grid-flow-col lg:grid-cols-4 grid-cols-5 gap-4">
        {billions.map((billion: IListBillion) => (
          <BillionCard key={billion.id} {...billion} />
        ))}
      </div>
    </div>
  );
}
