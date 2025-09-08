import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEDICAL_EMERGENCY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.medical_emergency;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 79.5,
}

export function MedicalEmergency(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDICAL_EMERGENCY}
      {...props}
      _style={extendStyle(MEDICAL_EMERGENCY, props)}
    />
  )
}
