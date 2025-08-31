import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PULSE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.pulse_1;',
  _width: 60,
  _height: 60,
}

export function Pulse(props: DiagramNodeProps) {
  return <Shape {...PULSE} {...props} _style={extendStyle(PULSE, props)} />
}
