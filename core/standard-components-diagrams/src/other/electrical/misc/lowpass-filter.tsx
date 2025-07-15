import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOWPASS_FILTER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.lowpass_filter;',
  _width: 52,
  _height: 46,
}

export function LowpassFilter(props: DiagramNodeProps) {
  return <Shape {...LOWPASS_FILTER} {...props} />
}
