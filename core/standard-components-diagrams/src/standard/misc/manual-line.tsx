import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANUAL_LINE = {
  _style:
    'edgeStyle=segmentEdgeStyle;endArrow=classic;html=1;curved=0;rounded=0;endSize=8;startSize=8;',
  _width: 50,
  _height: 50,
}

export function ManualLine(props: DiagramNodeProps) {
  return <Dependency {...MANUAL_LINE} {...props} />
}
