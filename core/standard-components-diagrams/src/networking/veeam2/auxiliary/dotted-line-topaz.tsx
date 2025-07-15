import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOTTED_LINE_TOPAZ = {
  _style:
    'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#00B336;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=none;endFill=0;startArrow=none;dashed=1;',
  _width: 100,
  _height: 0,
}

export function DottedLineTopaz(props: DiagramNodeProps) {
  return <Dependency {...DOTTED_LINE_TOPAZ} {...props} />
}
