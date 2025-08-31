import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROTOPAGE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.protopage;fillColor=#4B78C0;gradientColor=#294282',
  _width: 102.4,
  _height: 102.4,
}

export function Protopage(props: DiagramNodeProps) {
  return (
    <Shape {...PROTOPAGE} {...props} _style={extendStyle(PROTOPAGE, props)} />
  )
}
