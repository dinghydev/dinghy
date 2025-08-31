import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOT_IEC = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.not_2;',
  _width: 66,
  _height: 80,
}

export function NotIec(props: DiagramNodeProps) {
  return <Shape {...NOT_IEC} {...props} _style={extendStyle(NOT_IEC, props)} />
}
