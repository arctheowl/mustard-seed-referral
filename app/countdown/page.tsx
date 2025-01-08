import CountDown2 from "../components/countDown2";

export default function TicketPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-200">
      <main className="flex flex-col row-start-2 items-center sm:items-start text-black">
        <CountDown2 />
      </main>
    </div>
  );
}
