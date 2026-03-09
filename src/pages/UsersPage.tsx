import { useState } from "react"

import { useUsers } from "../hooks/useUsers"
import { useDebounce } from "../hooks/useDebounce"

import { UsersList } from "../components/UsersList"
import { Pagination } from "../components/Pagination"
import { SearchInput } from "../components/SearchInput"

export function UsersPage() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  const debouncedSearch = useDebounce(search, 400)

  const { users, total, limit, loading, error } = useUsers(page, debouncedSearch)

  return (
    <div className="container">
      <h1>Users</h1>

      <SearchInput
        value={search}
        onChange={(v) => {
            setSearch(v)
            setPage(1)
        }}
        />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && <UsersList users={users} />}

      {!debouncedSearch && (
        <Pagination
          page={page}
          total={total}
          limit={limit}
          onChange={setPage}
        />
      )}
    </div>
  )
}