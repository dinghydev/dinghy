import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AGITATOR_FLATE_BLADE_PADDLE = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(flate-blade_paddle);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 140,
}

export function AgitatorFlateBladePaddle(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_FLATE_BLADE_PADDLE}
      {...props}
      _style={extendStyle(AGITATOR_FLATE_BLADE_PADDLE, props)}
    />
  )
}
