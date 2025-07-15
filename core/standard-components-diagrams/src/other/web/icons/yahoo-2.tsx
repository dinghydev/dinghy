import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YAHOO_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.yahoo_2;fillColor=#AC37AE;gradientColor=#2E0E2D',
  _width: 102.4,
  _height: 102.4,
}

export function Yahoo2(props: DiagramNodeProps) {
  return <Shape {...YAHOO_2} {...props} />
}
