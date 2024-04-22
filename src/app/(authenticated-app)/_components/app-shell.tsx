'use client'

type AppShellProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function AppShell({ children }: AppShellProps) {
  return children
}
