import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PULSE_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.pulse_2;',
  _width: 60,
  _height: 60,
}

export function Pulse2(props: DiagramNodeProps) {
  return <Shape {...PULSE_2} {...props} _style={extendStyle(PULSE_2, props)} />
}
