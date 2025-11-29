import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSORB_1 = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.transorb_1;',
  },
  _width: 100,
  _height: 60,
}

export function Transorb1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRANSORB_1)} />
}
