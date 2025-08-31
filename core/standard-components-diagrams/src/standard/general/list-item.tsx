import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST_ITEM = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 30,
}

export function ListItem(props: DiagramNodeProps) {
  return (
    <Shape {...LIST_ITEM} {...props} _style={extendStyle(LIST_ITEM, props)} />
  )
}
