import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHASSIS = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.chassis;',
  _width: 65,
  _height: 32,
}

export function Chassis(props: DiagramNodeProps) {
  return <Shape {...CHASSIS} {...props} _style={extendStyle(CHASSIS, props)} />
}
