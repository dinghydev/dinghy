import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INVENTORY_BOX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.inventory_box;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function InventoryBox(props: DiagramNodeProps) {
  return (
    <Shape
      {...INVENTORY_BOX}
      {...props}
      _style={extendStyle(INVENTORY_BOX, props)}
    />
  )
}
