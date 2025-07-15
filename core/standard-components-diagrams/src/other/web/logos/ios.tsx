import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ios;fillColor=#695D5D;gradientColor=#100E0E',
  _width: 73.60000000000001,
  _height: 39.400000000000006,
}

export function Ios(props: DiagramNodeProps) {
  return <Shape {...IOS} {...props} />
}
