import { formatToBillion } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";

const AVATAR_URL = "https://avatars.githubusercontent.com/u/166684403?v=4";

export interface IListBillion {
  map: any;
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: Array<string>;
}

export default function BillionCard({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IListBillion) {
  if (!squareImage.startsWith("https://")) {
    squareImage = AVATAR_URL;
  }
  return (
    <Link
      href={`/person/${id}`}
      key={id}
      className="card bg-base-100 shadow-xl hover:scale-105 transition-transform active:scale-95"
    >
      <figure className="">
        <Image
          src={squareImage}
          alt={name}
          width={400}
          height={400}
          className=""
        />
      </figure>
      <div className="card-body p-4 h-28">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <div className="badge badge-neutral">
            {formatToBillion(netWorth)} Billion
          </div>
          {industries.map((industry, key) => (
            <div key={key} className="badge badge-neutral">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
