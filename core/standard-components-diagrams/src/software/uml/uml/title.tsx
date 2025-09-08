import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TITLE = {
  _style: {
    entity:
      'text;align=center;fontStyle=1;verticalAlign=middle;spacingLeft=3;spacingRight=3;strokeColor=none;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;html=1;',
  },
  _original_width: 80,
  _original_height: 26,
}

export function Title(props: DiagramNodeProps) {
  return <Shape {...TITLE} {...props} _style={extendStyle(TITLE, props)} />
}
