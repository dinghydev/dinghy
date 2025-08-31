import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERIC_GROUP = {
  _style: {
    group:
      'outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;strokeColor=#879196;fillColor=none;verticalAlign=top;align=center;fontColor=#879196;dashed=1;spacingTop=3;',
    entity: {
      strokeColor: '#879196',
      fontColor: '#879196',
    },
  },
}

export function GenericGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_GROUP}
      {...props}
      _style={extendStyle(GENERIC_GROUP, props)}
    />
  )
}
