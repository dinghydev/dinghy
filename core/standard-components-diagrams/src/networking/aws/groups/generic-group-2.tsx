import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENERIC_GROUP_2 = {
  _style: {
    group:
      'fillColor=#EFF0F3;strokeColor=none;dashed=0;verticalAlign=top;fontStyle=0;fontColor=#232F3D;whiteSpace=wrap;html=1;',
    entity: {
      fillColor: '#EFF0F3',
      fontColor: '#232F3D',
    },
  },
}

export function GenericGroup2(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_GROUP_2}
      {...props}
      _style={extendStyle(GENERIC_GROUP_2, props)}
    />
  )
}
