import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WLAN_CONTROLLER = {
  _style:
    'shape=mxgraph.cisco.wireless.wlan_controller;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 101,
  _height: 56,
}

export function WlanController(props: DiagramNodeProps) {
  return (
    <Shape
      {...WLAN_CONTROLLER}
      {...props}
      _style={extendStyle(WLAN_CONTROLLER, props)}
    />
  )
}
