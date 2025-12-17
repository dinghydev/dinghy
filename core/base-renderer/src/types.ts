import type { ReactElement } from 'react'

export type Output<T> = {
  views: string[]
  model: any
  result: T
}

export type HostContainer<T, P> = {
  renderOptions: P
  applyProcessors?: (hostContainer: HostContainer<T, P>) => ReactElement
  callback?: (hostContainer: HostContainer<T, P>) => Output<T>
  rootElement?: ReactElement
} & Output<T>
