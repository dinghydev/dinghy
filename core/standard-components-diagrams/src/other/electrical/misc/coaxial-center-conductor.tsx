import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COAXIAL_CENTER_CONDUCTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.coaxial_center_conductor',
  },
  _width: 300,
  _height: 150,
}

export function CoaxialCenterConductor(props: DiagramNodeProps) {
  return (
    <Shape
      {...COAXIAL_CENTER_CONDUCTOR}
      {...props}
      _style={extendStyle(COAXIAL_CENTER_CONDUCTOR, props)}
    />
  )
}
