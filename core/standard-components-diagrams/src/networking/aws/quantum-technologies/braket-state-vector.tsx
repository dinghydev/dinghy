import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRAKET_STATE_VECTOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.braket_state_vector;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function BraketStateVector(props: DiagramNodeProps) {
  return (
    <Shape
      {...BRAKET_STATE_VECTOR}
      {...props}
      _style={extendStyle(BRAKET_STATE_VECTOR, props)}
    />
  )
}
