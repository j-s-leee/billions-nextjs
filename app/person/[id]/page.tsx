import Image from "next/image";
import { notFound } from "next/navigation";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const billion = await getBillion(id);
  return {
    title: billion.name,
  };
}

export interface IFinanceAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  exerciseOptionPrice: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
}

export interface IBillionDetail {
  name: string;
  netWorth: number;
  country: string;
  industries: Array<string>;
  financialAssets: Array<IFinanceAsset>;
  squareImage: string;
  bio: string;
}

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

export default async function BillionDetail({ params }: IParams) {
  const { id } = await params;
  if (!id) return notFound();

  const billion = await getBillion(id);
  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col gap-4">
        <Image
          src={billion.squareImage}
          alt={billion.name}
          width={400}
          height={400}
          className="skeleton w-80 h-80"
        />
        <div className="text-3xl font-bold">{billion.name}</div>
        <div className="text-lg font-semibold">{billion.country}</div>
        <div className="text-lg font-semibold">
          {billion.industries.map((industry: string, index: number) => (
            <span key={index}>{industry}</span>
          ))}
        </div>
        <div className="">{billion.bio}</div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <h1 className="mt-24 text-3xl font-bold">Financial Assets</h1>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center">
        {billion.financialAssets.map((asset: IFinanceAsset, index: number) => (
          <div key={index} className="card outline p-4">
            <div className="flex justify-between">
              <div className="text-sm font-semibold">{asset.ticker}</div>
              <div className="badge badge-sm badge-neutral text-sm font-semibold">
                {asset.exchange}
              </div>
            </div>
            <div className="text-sm font-semibold">
              Shares: {asset.numberOfShares.toLocaleString()}
            </div>
            <div className="text-sm font-semibold">
              Exercise Price: ${asset.exerciseOptionPrice}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
