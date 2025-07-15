import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TURBINE_AGITATOR = {
  _style:
    'shape=mxgraph.pid.vessels.turbine_agitator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 36,
  _height: 93,
}

export function TurbineAgitator(props: DiagramNodeProps) {
  return <Shape {...TURBINE_AGITATOR} {...props} />
}
