import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHASSIS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.chassis;',
  },
  _width: 65,
  _height: 32,
}

export function Chassis(props: DiagramNodeProps) {
  return <Shape {...CHASSIS} {...props} _style={extendStyle(CHASSIS, props)} />
}
