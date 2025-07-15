import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DESIRED_STATE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.desired_state;fillColor=#5294CF;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function DesiredState(props: DiagramNodeProps) {
  return <Shape {...DESIRED_STATE} {...props} />
}
