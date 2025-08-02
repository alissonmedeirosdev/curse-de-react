import { useSearchParams } from "react-router-dom";

export function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen min-h-screen bg-slate-500 p-6">
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}
