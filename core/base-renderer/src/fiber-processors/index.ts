import { p10HandleTextNodes } from './p10HandleTextNodes.tsx'
import { p20PopulateCoreAttributes } from './p20PopulateCoreAttributes.tsx'
import type { HostContainer } from '../types.ts'
export type Processor = (container: HostContainer<unknown, unknown>) => void

const processors: Processor[] = [
  p10HandleTextNodes,
  p20PopulateCoreAttributes,
]

export function applyFiberProcessors(
  container: HostContainer<unknown, unknown>,
) {
  processors.map((processor) => processor(container))
}
