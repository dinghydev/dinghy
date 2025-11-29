import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTACTOR_1_32A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.contactor_1_32a;',
  },
  _width: 27,
  _height: 43,
}

export function Contactor132a(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTACTOR_1_32A)} />
}
