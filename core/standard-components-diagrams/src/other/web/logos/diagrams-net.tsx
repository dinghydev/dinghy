import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGRAMS_NET = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.drawio3;fillColor=#1A5BA3;fontSize=15;fontColor=#1A5BA3;fontStyle=1',
  _width: 60,
  _height: 60,
}

export function DiagramsNet(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGRAMS_NET}
      {...props}
      _style={extendStyle(DIAGRAMS_NET, props)}
    />
  )
}
