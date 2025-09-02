import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOCK = {
  _style: {
    entity:
      'verticalAlign=top;align=left;spacingTop=8;spacingLeft=2;spacingRight=12;shape=cube;size=10;direction=south;fontStyle=4;html=1;whiteSpace=wrap;',
  },
  _original_width: 180,
  _original_height: 120,
}

export function Block(props: DiagramNodeProps) {
  return <Shape {...BLOCK} {...props} _style={extendStyle(BLOCK, props)} />
}
