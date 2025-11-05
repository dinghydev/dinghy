import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_GROUP = {
  _style: {
    container:
      'outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;strokeColor=#879196;fillColor=none;verticalAlign=top;align=center;fontColor=#879196;dashed=1;spacingTop=3;',
    entity: {
      strokeColor: '#879196',
      fontColor: '#879196',
    },
  },
}

export function GenericGroup(props: NodeProps) {
  return (
    <Shape
      {...GENERIC_GROUP}
      {...props}
      _style={extendStyle(GENERIC_GROUP, props)}
    />
  )
}
