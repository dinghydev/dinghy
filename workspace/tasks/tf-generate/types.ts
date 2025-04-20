export type Element = {
  tag: string
  namespace?: string
  attributes: Record<string, any>
  children?: Element[]
}
