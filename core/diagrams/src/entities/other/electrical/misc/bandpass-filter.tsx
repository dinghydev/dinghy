import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BANDPASS_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.bandpass_filter;',
  },
  _original_width: 52,
  _original_height: 46,
}

export function BandpassFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...BANDPASS_FILTER}
      {...props}
      _style={extendStyle(BANDPASS_FILTER, props)}
    />
  )
}
