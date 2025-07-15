import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BANDPASS_FILTER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.bandpass_filter;',
  _width: 52,
  _height: 46,
}

export function BandpassFilter(props: DiagramNodeProps) {
  return <Shape {...BANDPASS_FILTER} {...props} />
}
