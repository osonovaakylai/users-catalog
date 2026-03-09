import type { User } from "../types/user"
import { UserCard } from "./UserCard"

export function UsersList({ users }: { users: User[] }) {
    if (!users.length) {
      return <p>No users found</p>
    }
    
  return (
    <div className="grid">
      {users.map(u => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  )
}