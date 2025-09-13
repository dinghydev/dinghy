import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAWTOOTH = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.sawtooth;',
  },
  _width: 90,
  _height: 40,
}

export function Sawtooth(props: DiagramNodeProps) {
  return (
    <Shape {...SAWTOOTH} {...props} _style={extendStyle(SAWTOOTH, props)} />
  )
}
