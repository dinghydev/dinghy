import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDICAL_EMERGENCY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.medical_emergency;fillColor=#5294CF;gradientColor=none;',
  _width: 79.5,
  _height: 79.5,
}

export function MedicalEmergency(props: DiagramNodeProps) {
  return <Shape {...MEDICAL_EMERGENCY} {...props} />
}
