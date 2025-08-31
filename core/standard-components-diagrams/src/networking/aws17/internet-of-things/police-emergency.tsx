import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POLICE_EMERGENCY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.police_emergency;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function PoliceEmergency(props: DiagramNodeProps) {
  return (
    <Shape
      {...POLICE_EMERGENCY}
      {...props}
      _style={extendStyle(POLICE_EMERGENCY, props)}
    />
  )
}
