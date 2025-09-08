import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROJECT_ZONE = {
  _style: {
    entity:
      'fillColor=#F6F6F6;strokeColor=none;shadow=0;gradientColor=none;fontSize=14;align=left;spacing=10;fontColor=#717171;9E9E9E;verticalAlign=top;spacingTop=-4;fontStyle=0;spacingLeft=40;html=1;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 350,
}

export function ProjectZone(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROJECT_ZONE}
      {...props}
      _style={extendStyle(PROJECT_ZONE, props)}
    />
  )
}
