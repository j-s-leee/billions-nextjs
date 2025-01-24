export default function Loading() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col gap-4">
        <div className="skeleton w-80 h-80"></div>
        <div className="skeleton h-8 w-40"></div>
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-24"></div>
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-4/5"></div>
        <div className="skeleton h-4 w-4/5"></div>
        <div className="skeleton h-4 w-5/6"></div>
      </div>

      <h1 className="skeleton h-8 w-80 mt-24"></h1>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center">
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
        <div className="skeleton h-4"></div>
      </div>
    </div>
  );
}
