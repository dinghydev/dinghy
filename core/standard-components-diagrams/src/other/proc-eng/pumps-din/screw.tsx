import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCREW = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.screw;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function Screw(props: DiagramNodeProps) {
  return <Shape {...SCREW} {...props} _style={extendStyle(SCREW, props)} />
}
