import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INVENTORY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.inventory;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 90,
  _original_height: 105,
}

export function Inventory(props: DiagramNodeProps) {
  return (
    <Shape {...INVENTORY} {...props} _style={extendStyle(INVENTORY, props)} />
  )
}
