import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_1 = {
  _style:
    'text;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 26,
}

export function Item1(props: DiagramNodeProps) {
  return <Shape {...ITEM_1} {...props} />
}
