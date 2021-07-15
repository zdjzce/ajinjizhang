interface icon {
  name?: string
  icon?: string
  color?: string
}
type Record = {
  tags: icon
  notes: string
  type: string
  amount: number
  createdAt?: Date
}
