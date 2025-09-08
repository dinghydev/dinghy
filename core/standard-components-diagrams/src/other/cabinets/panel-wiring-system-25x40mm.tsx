import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PANEL_WIRING_SYSTEM_25X40MM = {
  _style: {
    entity: 'shape=rect;dashed=0;shadow=0;html=1;whiteSpace=wrap;',
  },
  _original_width: 220.00000000000003,
  _original_height: 12.5,
}

export function PanelWiringSystem25x40mm(props: DiagramNodeProps) {
  return (
    <Shape
      {...PANEL_WIRING_SYSTEM_25X40MM}
      {...props}
      _style={extendStyle(PANEL_WIRING_SYSTEM_25X40MM, props)}
    />
  )
}
