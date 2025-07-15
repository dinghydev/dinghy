import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COAXIAL_CENTER_CONDUCTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.coaxial_center_conductor',
  _width: 300,
  _height: 150,
}

export function CoaxialCenterConductor(props: DiagramNodeProps) {
  return <Shape {...COAXIAL_CENTER_CONDUCTOR} {...props} />
}
