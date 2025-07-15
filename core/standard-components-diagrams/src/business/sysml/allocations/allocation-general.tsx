import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALLOCATION_GENERAL = {
  _style: 'shape=rect;html=1;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 60,
}

export function AllocationGeneral(props: DiagramNodeProps) {
  return <Shape {...ALLOCATION_GENERAL} {...props} />
}
