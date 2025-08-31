import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTI_FABRIC_SERVER_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.multi-fabric_server_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 56,
  _height: 75,
}

export function MultiFabricServerSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_FABRIC_SERVER_SWITCH}
      {...props}
      _style={extendStyle(MULTI_FABRIC_SERVER_SWITCH, props)}
    />
  )
}
