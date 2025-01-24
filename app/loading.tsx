export default function Loading() {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-center">
        {[...Array(30)].map((_, index) => (
          <div key={index} className="card gap-4">
            <div className="skeleton h-40 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="flex gap-4">
              <span className="skeleton h-4 w-20"></span>
              <span className="skeleton h-4 w-20"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
