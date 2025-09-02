import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAWTOOTH = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.sawtooth;',
  },
  _original_width: 90,
  _original_height: 40,
}

export function Sawtooth(props: DiagramNodeProps) {
  return (
    <Shape {...SAWTOOTH} {...props} _style={extendStyle(SAWTOOTH, props)} />
  )
}
