import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIST_GROUP_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontColor=#000000;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=left;spacing=2;fontSize=14;verticalAlign=top;',
  },
  _width: 1,
  _height: 120,
}

export function ListGroup2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIST_GROUP_2)} />
}
