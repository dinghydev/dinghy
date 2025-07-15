import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTUATOR = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.actuator;fillColor=#5294CF;gradientColor=none;',
  _width: 76.5,
  _height: 90,
}

export function Actuator(props: DiagramNodeProps) {
  return <Shape {...ACTUATOR} {...props} />
}
