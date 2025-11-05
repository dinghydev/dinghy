import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEDICAL_EMERGENCY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.medical_emergency;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function MedicalEmergency(props: NodeProps) {
  return (
    <Shape
      {...MEDICAL_EMERGENCY}
      {...props}
      _style={extendStyle(MEDICAL_EMERGENCY, props)}
    />
  )
}
