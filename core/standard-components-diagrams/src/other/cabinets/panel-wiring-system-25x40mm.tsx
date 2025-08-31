import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PANEL_WIRING_SYSTEM_25X40MM = {
  _style: 'shape=rect;dashed=0;shadow=0;html=1;whiteSpace=wrap;',
  _width: 220.00000000000003,
  _height: 12.5,
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
