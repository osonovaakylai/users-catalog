import { useEffect, useState } from "react"

import type { User } from "../types/user"
import { getUsers, searchUsers } from "../api/usersApi"

export function useUsers(page: number, search: string) {
  const [users, setUsers] = useState<User[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const limit = 10

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        if (search) {
          const data = await searchUsers(search)
          setUsers(data.users)
          setTotal(data.total)
        } else {
          const skip = (page - 1) * limit
          const data = await getUsers(limit, skip)
          setUsers(data.users)
          setTotal(data.total)
        }
      } catch (e) {
        if ((e as any).name !== "AbortError") {
          setError("Failed to load users")
        }
      } finally {
        setLoading(false)
      }
    }

    load()

    return () => controller.abort()
  }, [page, search])

  return { users, total, limit, loading, error }
}