import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FDDI_RING = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.fddi_ring;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 136,
  _original_height: 48,
}

export function FddiRing(props: DiagramNodeProps) {
  return (
    <Shape {...FDDI_RING} {...props} _style={extendStyle(FDDI_RING, props)} />
  )
}
