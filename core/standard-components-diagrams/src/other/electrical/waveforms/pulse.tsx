import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PULSE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.pulse_1;',
  _width: 90,
  _height: 90,
}

export function Pulse(props: DiagramNodeProps) {
  return <Shape {...PULSE} {...props} />
}
