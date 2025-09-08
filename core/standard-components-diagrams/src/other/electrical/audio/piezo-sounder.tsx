import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIEZO_SOUNDER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.piezo_sounder;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function PiezoSounder(props: DiagramNodeProps) {
  return (
    <Shape
      {...PIEZO_SOUNDER}
      {...props}
      _style={extendStyle(PIEZO_SOUNDER, props)}
    />
  )
}
