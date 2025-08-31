import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGRAMS_NET_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.drawio4;fillColor=#1A5BA3;fontSize=15;fontColor=#1A5BA3;fontStyle=1',
  _width: 60,
  _height: 60,
}

export function DiagramsNet2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGRAMS_NET_2}
      {...props}
      _style={extendStyle(DIAGRAMS_NET_2, props)}
    />
  )
}
