import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PANEL_WIRING_SYSTEM_25X40MM_VERTICAL = {
  _style: {
    entity:
      'shape=rect;dashed=0;shadow=0;html=1;whiteSpace=wrap;direction=south;horizontal=0;',
  },
  _width: 12.5,
  _height: 350,
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
