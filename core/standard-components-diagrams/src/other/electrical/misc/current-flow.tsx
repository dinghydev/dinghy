import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CURRENT_FLOW = {
  _style:
    'verticalLabelPosition=top;verticalAlign=bottom;shape=mxgraph.electrical.signal_sources.current_flow;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=10;html=1;',
  _width: 70,
  _height: 10,
}

export function CurrentFlow(props: DiagramNodeProps) {
  return <Shape {...CURRENT_FLOW} {...props} />
}
