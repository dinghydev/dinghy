import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YAHOO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yahoo;fillColor=#65106E;strokeColor=none',
  _width: 74.4,
  _height: 43.6,
}

export function Yahoo(props: DiagramNodeProps) {
  return <Shape {...YAHOO} {...props} />
}
