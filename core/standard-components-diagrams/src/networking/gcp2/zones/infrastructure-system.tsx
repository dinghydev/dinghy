import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INFRASTRUCTURE_SYSTEM = {
  _style: {
    entity:
      'sketch=0;points=[[0,0,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[1,1,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];rounded=1;absoluteArcSize=1;arcSize=2;html=1;strokeColor=none;gradientColor=none;shadow=0;dashed=0;fontSize=12;fontColor=#9E9E9E;align=left;verticalAlign=top;spacing=10;spacingTop=-4;whiteSpace=wrap;fillColor=#F3E5F5;',
  },
  _original_width: 120,
  _original_height: 150,
}

export function InfrastructureSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFRASTRUCTURE_SYSTEM}
      {...props}
      _style={extendStyle(INFRASTRUCTURE_SYSTEM, props)}
    />
  )
}
