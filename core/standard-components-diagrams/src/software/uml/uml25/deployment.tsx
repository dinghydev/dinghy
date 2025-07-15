import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEPLOYMENT = {
  _style:
    'verticalAlign=top;align=left;shape=cube;size=10;direction=south;fontStyle=0;html=1;boundedLbl=1;spacingLeft=5;whiteSpace=wrap;',
  _width: 0,
  _height: 140,
}

export function Deployment(props: DiagramNodeProps) {
  return <Shape {...DEPLOYMENT} {...props} />
}
