import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEP_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.waveforms.step_2;',
  },
  _original_width: 90,
  _original_height: 90,
}

export function Step2(props: DiagramNodeProps) {
  return <Shape {...STEP_2} {...props} _style={extendStyle(STEP_2, props)} />
}
