import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEP_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.step_2;',
  _width: 90,
  _height: 90,
}

export function Step2(props: DiagramNodeProps) {
  return <Shape {...STEP_2} {...props} />
}
