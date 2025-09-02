import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQUARE_WAVE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.square_wave;',
  },
  _original_width: 90,
  _original_height: 80,
}

export function SquareWave(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQUARE_WAVE}
      {...props}
      _style={extendStyle(SQUARE_WAVE, props)}
    />
  )
}
