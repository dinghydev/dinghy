import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TURBINE_AGITATOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.turbine_agitator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 36,
  _original_height: 93,
}

export function TurbineAgitator(props: DiagramNodeProps) {
  return (
    <Shape
      {...TURBINE_AGITATOR}
      {...props}
      _style={extendStyle(TURBINE_AGITATOR, props)}
    />
  )
}
