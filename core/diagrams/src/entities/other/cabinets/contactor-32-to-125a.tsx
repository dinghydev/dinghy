import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTACTOR_32_TO_125A = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.contactor_32_125a;',
  },
  _width: 30,
  _height: 50,
}

export function Contactor32To125a(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTACTOR_32_TO_125A)} />
}
