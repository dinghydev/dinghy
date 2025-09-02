import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COAXIAL_OUTSIDE_CONDUCTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.coaxial_outside_conductor',
  },
  _original_width: 300,
  _original_height: 150,
}

export function CoaxialOutsideConductor(props: DiagramNodeProps) {
  return (
    <Shape
      {...COAXIAL_OUTSIDE_CONDUCTOR}
      {...props}
      _style={extendStyle(COAXIAL_OUTSIDE_CONDUCTOR, props)}
    />
  )
}
