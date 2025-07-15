import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PULSE_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.pulse_2;',
  _width: 90,
  _height: 90,
}

export function Pulse2(props: DiagramNodeProps) {
  return <Shape {...PULSE_2} {...props} />
}
