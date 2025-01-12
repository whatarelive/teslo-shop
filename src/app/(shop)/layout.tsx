import Sidebar from "@/components/ui/sidebar/Sidebar";
import TopMenu from "@/components/ui/top-menu/TopMenu";

interface Props {
  readonly children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <main className="min-h-screen">
      <TopMenu/>
      <Sidebar/>

      <div className="px-0 sm:px-10">
       { children }
      </div>
    </main>
  )
}
