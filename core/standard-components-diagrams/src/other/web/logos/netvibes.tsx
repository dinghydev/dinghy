import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETVIBES = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.netvibes;fillColor=#84BD00;strokeColor=none',
  _width: 60,
  _height: 60,
}

export function Netvibes(props: DiagramNodeProps) {
  return (
    <Shape {...NETVIBES} {...props} _style={extendStyle(NETVIBES, props)} />
  )
}
