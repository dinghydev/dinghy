import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REPORTED_STATE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.reported_state;fillColor=#5294CF;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function ReportedState(props: DiagramNodeProps) {
  return <Shape {...REPORTED_STATE} {...props} />
}
