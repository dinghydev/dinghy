import { p40ResolveDependencies } from './p40ResolveDependencies.tsx'
import type { HostContainer } from '../types.ts'
import { p50CollectViews } from './p50CollectViews.tsx'
import { p30BindData } from './p30BindData.tsx'
import { p25ApplyEnabled } from './p25ApplyEnabled.ts'
export type Processor = (container: HostContainer<unknown, unknown>) => void

export const processors: Processor[] = [
  p25ApplyEnabled,
  p30BindData,
  p40ResolveDependencies,
  p50CollectViews,
]

export async function applyProcessors<T, P>(
  container: HostContainer<T, P>,
) {
  for (const processor of processors) {
    await processor(container as HostContainer<unknown, unknown>)
  }
}
