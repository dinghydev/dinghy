import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PANEL_WIRING_SYSTEM_25X40MM = {
  _style: {
    entity: 'shape=rect;dashed=0;shadow=0;html=1;whiteSpace=wrap;',
  },
  _width: 220.00000000000003,
  _height: 12.5,
}

export function PanelWiringSystem25x40mm(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PANEL_WIRING_SYSTEM_25X40MM)}
    />
  )
}
