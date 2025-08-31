import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEP = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.step_1;',
  },
  _width: 60,
  _height: 60,
}

export function Step(props: DiagramNodeProps) {
  return <Shape {...STEP} {...props} _style={extendStyle(STEP, props)} />
}
