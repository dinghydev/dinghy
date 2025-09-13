import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CURRENT_FLOW = {
  _style: {
    entity:
      'verticalLabelPosition=top;verticalAlign=bottom;shape=mxgraph.electrical.signal_sources.current_flow;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=10;html=1;',
  },
  _width: 70,
  _height: 10,
}

export function CurrentFlow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CURRENT_FLOW}
      {...props}
      _style={extendStyle(CURRENT_FLOW, props)}
    />
  )
}
