import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST_GROUP_2 = {
  _style:
    'strokeColor=none;fillColor=none;fontColor=#000000;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=left;spacing=2;fontSize=14;verticalAlign=top;',
  _width: 1,
  _height: 120,
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
