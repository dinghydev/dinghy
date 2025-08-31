import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INVENTORY_SOFTWARE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.inventory_software',
  _width: 50,
  _height: 49,
}

export function InventorySoftware(props: DiagramNodeProps) {
  return (
    <Shape
      {...INVENTORY_SOFTWARE}
      {...props}
      _style={extendStyle(INVENTORY_SOFTWARE, props)}
    />
  )
}
