import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOWPASS_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.lowpass_filter;',
  },
  _original_width: 52,
  _original_height: 46,
}

export function LowpassFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOWPASS_FILTER}
      {...props}
      _style={extendStyle(LOWPASS_FILTER, props)}
    />
  )
}
