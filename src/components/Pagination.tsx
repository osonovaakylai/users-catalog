type Props = {
  page: number
  total: number
  limit: number
  onChange: (p: number) => void
}

export function Pagination({ page, total, limit, onChange }: Props) {
  const pages = Math.ceil(total / limit)

  return (
    <div className="pagination">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          className={page === i + 1 ? "active" : ""}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}