import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHYSICAL_THERAPY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.physical_therapy;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 89,
}

export function PhysicalTherapy(props: NodeProps) {
  return (
    <Shape
      {...PHYSICAL_THERAPY}
      {...props}
      _style={extendStyle(PHYSICAL_THERAPY, props)}
    />
  )
}
