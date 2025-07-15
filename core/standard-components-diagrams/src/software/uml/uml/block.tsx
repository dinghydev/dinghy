import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOCK = {
  _style:
    'verticalAlign=top;align=left;spacingTop=8;spacingLeft=2;spacingRight=12;shape=cube;size=10;direction=south;fontStyle=4;html=1;whiteSpace=wrap;',
  _width: 180,
  _height: 120,
}

export function Block(props: DiagramNodeProps) {
  return <Shape {...BLOCK} {...props} />
}
