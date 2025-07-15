import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETLOG = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.netlog;fillColor=#FA3743;gradientColor=#E10E11',
  _width: 102.4,
  _height: 102.4,
}

export function Netlog(props: DiagramNodeProps) {
  return <Shape {...NETLOG} {...props} />
}
