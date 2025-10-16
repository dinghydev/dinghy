import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIST_ITEM_3 = {
  _style: {
    entity:
      'line;strokeWidth=1;rotatable=0;dashed=0;labelPosition=right;align=left;verticalAlign=middle;spacingTop=0;spacingLeft=6;points=[];portConstraint=eastwest;',
  },
  _width: 0,
  _height: 10,
}

export function ListItem3(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIST_ITEM_3}
      {...props}
      _style={extendStyle(LIST_ITEM_3, props)}
    />
  )
}
