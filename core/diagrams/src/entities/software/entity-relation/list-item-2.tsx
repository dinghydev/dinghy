import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIST_ITEM_2 = {
  _style: {
    entity:
      'shape=partialRectangle;fillColor=none;align=left;verticalAlign=middle;strokeColor=none;spacingLeft=34;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;dropTarget=0;',
  },
  _width: 0,
  _height: 30,
}

export function ListItem2(props: NodeProps) {
  return (
    <Shape
      {...LIST_ITEM_2}
      {...props}
      _style={extendStyle(LIST_ITEM_2, props)}
    />
  )
}
