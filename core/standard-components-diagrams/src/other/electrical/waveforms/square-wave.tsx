import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQUARE_WAVE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.square_wave;',
  _width: 90,
  _height: 80,
}

export function SquareWave(props: DiagramNodeProps) {
  return <Shape {...SQUARE_WAVE} {...props} />
}
