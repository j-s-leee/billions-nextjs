import Image from "next/image";
import Link from "next/link";

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
  return (
    <Link
      href={`/person/${id}`}
      key={id}
      className="card bg-base-100 shadow-xl"
    >
      <figure>
        <img src={squareImage} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-secondary">{netWorth}</div>
          {industries.map((industry) => (
            <div className="badge badge-outline">{industry}</div>
          ))}
        </div>
      </div>
    </Link>
  );
}
