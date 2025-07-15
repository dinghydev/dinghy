import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPACER = {
  _style:
    'text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=4;spacingRight=4;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;',
  _width: 0,
  _height: 14,
}

export function Spacer(props: DiagramNodeProps) {
  return <Shape {...SPACER} {...props} />
}
