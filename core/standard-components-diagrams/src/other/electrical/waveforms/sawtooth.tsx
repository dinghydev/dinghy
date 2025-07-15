import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAWTOOTH = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.sawtooth;',
  _width: 90,
  _height: 40,
}

export function Sawtooth(props: DiagramNodeProps) {
  return <Shape {...SAWTOOTH} {...props} />
}
