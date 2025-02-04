import MapWrapper from "@components/MapWrapper";

export default function MyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Where to Move</h1>
      <MapWrapper />
    </div>
  );
}
