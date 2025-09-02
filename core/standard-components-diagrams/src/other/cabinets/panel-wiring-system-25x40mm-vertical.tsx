import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PANEL_WIRING_SYSTEM_25X40MM_VERTICAL = {
  _style: {
    entity:
      'shape=rect;dashed=0;shadow=0;html=1;whiteSpace=wrap;direction=south;horizontal=0;',
  },
  _original_width: 12.5,
  _original_height: 350,
}

export function PanelWiringSystem25x40mmVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...PANEL_WIRING_SYSTEM_25X40MM_VERTICAL}
      {...props}
      _style={extendStyle(PANEL_WIRING_SYSTEM_25X40MM_VERTICAL, props)}
    />
  )
}
