import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INVENTORY_BOX = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.inventory_box;',
  _width: 100,
  _height: 90,
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
