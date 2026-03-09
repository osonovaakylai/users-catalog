import type { User } from "../types/user";

export function UserCard({ user }: { user: User }) {
  const { image, firstName, lastName, email } = user

  return (
    <div className="card">
      <img src={image} alt={firstName} />
      <h3>{firstName} {lastName}</h3>
      <p>{email}</p>
    </div>
  )
}