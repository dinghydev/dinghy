import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.server_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 60,
  _height: 60,
}

export function ServerSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_SWITCH}
      {...props}
      _style={extendStyle(SERVER_SWITCH, props)}
    />
  )
}
