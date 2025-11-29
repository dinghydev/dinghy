import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIST_ITEM_1 = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;fontSize=12;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 30,
}

export function ListItem1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LIST_ITEM_1)} />
}
