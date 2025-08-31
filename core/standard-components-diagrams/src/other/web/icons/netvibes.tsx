import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETVIBES = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.netvibes;fillColor=#99DB00;gradientColor=#638E00',
  _width: 102.4,
  _height: 102.4,
}

export function Netvibes(props: DiagramNodeProps) {
  return (
    <Shape {...NETVIBES} {...props} _style={extendStyle(NETVIBES, props)} />
  )
}
