import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIST_ITEM = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 26,
}

export function ListItem(props: DiagramNodeProps) {
  return (
    <Shape {...LIST_ITEM} {...props} _style={extendStyle(LIST_ITEM, props)} />
  )
}
