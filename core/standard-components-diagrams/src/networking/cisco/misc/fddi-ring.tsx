import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FDDI_RING = {
  _style:
    'shape=mxgraph.cisco.misc.fddi_ring;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 136,
  _height: 48,
}

export function FddiRing(props: DiagramNodeProps) {
  return <Shape {...FDDI_RING} {...props} />
}
