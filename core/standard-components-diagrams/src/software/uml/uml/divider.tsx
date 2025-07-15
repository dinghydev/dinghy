import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIVIDER = {
  _style:
    'line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;',
  _width: 0,
  _height: 8,
}

export function Divider(props: DiagramNodeProps) {
  return <Shape {...DIVIDER} {...props} />
}
