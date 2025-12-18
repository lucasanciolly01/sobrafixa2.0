import { Sidebar } from "../../components/layout/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 w-full lg:max-w-[calc(100vw-288px)]">
        {children}
      </main>
    </div>
  );
}