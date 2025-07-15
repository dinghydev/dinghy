import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YAHOO_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yahoo_2;fillColor=#65106E;strokeColor=none',
  _width: 80,
  _height: 46.6,
}

export function Yahoo2(props: DiagramNodeProps) {
  return <Shape {...YAHOO_2} {...props} />
}
