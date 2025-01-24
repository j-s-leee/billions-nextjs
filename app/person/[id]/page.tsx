import { notFound } from "next/navigation";

async function getBillion(id: string) {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
}

export default async function BillionDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  if (!id) return notFound();

  const billion = await getBillion(id);
  return <div>{id}</div>;
}
