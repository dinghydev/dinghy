import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CELL_PHONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.cell_phone;',
  },
  _width: 25,
  _height: 60,
}

export function CellPhone(props: NodeProps) {
  return (
    <Shape {...CELL_PHONE} {...props} _style={extendStyle(CELL_PHONE, props)} />
  )
}
