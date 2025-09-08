import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PULSE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.pulse_1;',
  },
  _original_width: 90,
  _original_height: 90,
}

export function Pulse(props: DiagramNodeProps) {
  return <Shape {...PULSE} {...props} _style={extendStyle(PULSE, props)} />
}
