import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHOPPED_SQUARE_WAVE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.slow_square_wave;',
  },
  _original_width: 90,
  _original_height: 80,
}

export function ChoppedSquareWave(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHOPPED_SQUARE_WAVE)} />
}
