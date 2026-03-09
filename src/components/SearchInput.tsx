type Props = {
  value: string
  onChange: (v: string) => void
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <input
      className="search"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}