import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINE_WAVE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.sine_wave;',
  },
  _width: 90,
  _height: 66.18,
}

export function SineWave(props: DiagramNodeProps) {
  return (
    <Shape {...SINE_WAVE} {...props} _style={extendStyle(SINE_WAVE, props)} />
  )
}
