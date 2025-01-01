interface Props {
   readonly children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main>
      { children }
    </main>
  )
}
