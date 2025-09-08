import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CELL_PHONE = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.cell_phone;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 47,
  _original_height: 98,
}

export function CellPhone(props: DiagramNodeProps) {
  return (
    <Shape {...CELL_PHONE} {...props} _style={extendStyle(CELL_PHONE, props)} />
  )
}
