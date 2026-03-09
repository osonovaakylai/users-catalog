import type { UsersResponse } from "../types/user"

const BASE = "https://dummyjson.com"

export const getUsers = async (limit: number, skip: number): Promise<UsersResponse> => {
  const res = await fetch(`${BASE}/users?limit=${limit}&skip=${skip}`)
  if (!res.ok) throw new Error("Failed to fetch users")
  return res.json()
}

export const searchUsers = async (query: string): Promise<UsersResponse> => {
  const res = await fetch(`${BASE}/users/search?q=${query}`)
  if (!res.ok) throw new Error("Failed to search users")
  return res.json()
}