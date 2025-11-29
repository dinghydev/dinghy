import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CELL_PHONE = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.cell_phone;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 47,
  _height: 98,
}

export function CellPhone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CELL_PHONE)} />
}
