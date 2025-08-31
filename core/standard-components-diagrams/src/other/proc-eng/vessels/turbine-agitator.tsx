import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TURBINE_AGITATOR = {
  _style:
    'shape=mxgraph.pid.vessels.turbine_agitator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 36,
  _height: 93,
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
