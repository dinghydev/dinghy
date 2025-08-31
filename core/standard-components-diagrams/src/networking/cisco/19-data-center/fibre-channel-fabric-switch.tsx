import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIBRE_CHANNEL_FABRIC_SWITCH = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=fibre_channel_fabric_switch;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _width: 50,
  _height: 73,
}

export function FibreChannelFabricSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIBRE_CHANNEL_FABRIC_SWITCH}
      {...props}
      _style={extendStyle(FIBRE_CHANNEL_FABRIC_SWITCH, props)}
    />
  )
}
