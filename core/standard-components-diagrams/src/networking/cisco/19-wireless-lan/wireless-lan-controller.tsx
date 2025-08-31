import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIRELESS_LAN_CONTROLLER = {
  _style:
    'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=wireless_lan_controller;fillColor=#FAFAFA;strokeColor=#005073;',
  _width: 64,
  _height: 50,
}

export function WirelessLanController(props: DiagramNodeProps) {
  return (
    <Shape
      {...WIRELESS_LAN_CONTROLLER}
      {...props}
      _style={extendStyle(WIRELESS_LAN_CONTROLLER, props)}
    />
  )
}
