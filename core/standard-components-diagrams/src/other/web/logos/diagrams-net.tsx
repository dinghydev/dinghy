import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIAGRAMS_NET = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.drawio3;fillColor=#1A5BA3;fontSize=15;fontColor=#1A5BA3;fontStyle=1',
  },
  _original_width: 52.2,
  _original_height: 52.2,
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
