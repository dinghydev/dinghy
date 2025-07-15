import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPPORT_RING = {
  _style:
    'shape=mxgraph.pid.apparatus_elements.support_ring;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 25,
}

export function SupportRing(props: DiagramNodeProps) {
  return <Shape {...SUPPORT_RING} {...props} />
}
