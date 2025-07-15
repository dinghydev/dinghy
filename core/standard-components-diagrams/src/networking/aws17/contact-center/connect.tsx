import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.connect;fillColor=#759C3E;gradientColor=none;',
  _width: 90,
  _height: 69,
}

export function Connect(props: DiagramNodeProps) {
  return <Shape {...CONNECT} {...props} />
}
