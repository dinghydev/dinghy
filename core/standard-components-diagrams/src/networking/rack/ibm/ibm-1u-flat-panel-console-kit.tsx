import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IBM_1U_FLAT_PANEL_CONSOLE_KIT = {
  _style: {
    entity:
      'shape=mxgraph.rack.ibm.ibm_1u_flat_panel_console_kit;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function Ibm1uFlatPanelConsoleKit(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_1U_FLAT_PANEL_CONSOLE_KIT}
      {...props}
      _style={extendStyle(IBM_1U_FLAT_PANEL_CONSOLE_KIT, props)}
    />
  )
}
