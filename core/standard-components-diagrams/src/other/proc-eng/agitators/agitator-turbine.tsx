import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AGITATOR_TURBINE = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(turbine);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 135,
}

export function AgitatorTurbine(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_TURBINE}
      {...props}
      _style={extendStyle(AGITATOR_TURBINE, props)}
    />
  )
}
