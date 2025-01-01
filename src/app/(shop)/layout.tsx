interface Props {
  readonly children: React.ReactNode;
}

export default function ShopLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-red-500">
      { children }
    </main>
  )
}
