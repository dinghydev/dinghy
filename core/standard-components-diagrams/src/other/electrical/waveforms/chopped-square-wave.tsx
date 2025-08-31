import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHOPPED_SQUARE_WAVE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.slow_square_wave;',
  _width: 90,
  _height: 80,
}

export function ChoppedSquareWave(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHOPPED_SQUARE_WAVE}
      {...props}
      _style={extendStyle(CHOPPED_SQUARE_WAVE, props)}
    />
  )
}
