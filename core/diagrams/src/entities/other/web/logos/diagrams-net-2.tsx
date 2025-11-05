import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIAGRAMS_NET_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.drawio4;fillColor=#1A5BA3;fontSize=15;fontColor=#1A5BA3;fontStyle=1',
  },
  _original_width: 52.2,
  _original_height: 52.2,
}

export function DiagramsNet2(props: NodeProps) {
  return (
    <Shape
      {...DIAGRAMS_NET_2}
      {...props}
      _style={extendStyle(DIAGRAMS_NET_2, props)}
    />
  )
}
