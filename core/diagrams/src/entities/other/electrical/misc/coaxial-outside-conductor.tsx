import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COAXIAL_OUTSIDE_CONDUCTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.coaxial_outside_conductor',
  },
  _width: 300,
  _height: 150,
}

export function CoaxialOutsideConductor(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COAXIAL_OUTSIDE_CONDUCTOR)} />
  )
}
