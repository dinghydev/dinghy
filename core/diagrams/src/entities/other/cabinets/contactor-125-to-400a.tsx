import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTACTOR_125_TO_400A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.contactor_125_400a;',
  },
  _width: 55.00000000000001,
  _height: 90,
}

export function Contactor125To400a(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTACTOR_125_TO_400A)} />
}
