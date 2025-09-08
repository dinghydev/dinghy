import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIST_GROUP_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontColor=#000000;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=left;spacing=2;fontSize=14;verticalAlign=top;',
  },
  _original_width: 1,
  _original_height: 120,
}

export function ListGroup2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIST_GROUP_2}
      {...props}
      _style={extendStyle(LIST_GROUP_2, props)}
    />
  )
}
