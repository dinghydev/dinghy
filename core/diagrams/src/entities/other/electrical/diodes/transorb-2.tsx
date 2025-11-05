import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSORB_2 = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.transorb_2;',
  },
  _width: 100,
  _height: 60,
}

export function Transorb2(props: NodeProps) {
  return (
    <Shape {...TRANSORB_2} {...props} _style={extendStyle(TRANSORB_2, props)} />
  )
}
