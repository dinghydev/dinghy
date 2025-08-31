import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIVIDER = {
  _style:
    'line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;',
  _width: 0,
  _height: 8,
}

export function Divider(props: DiagramNodeProps) {
  return <Shape {...DIVIDER} {...props} _style={extendStyle(DIVIDER, props)} />
}
