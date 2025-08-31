import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAYER_2_REMOTE_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.layer_2_remote_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 101,
  _height: 50,
}

export function Layer2RemoteSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAYER_2_REMOTE_SWITCH}
      {...props}
      _style={extendStyle(LAYER_2_REMOTE_SWITCH, props)}
    />
  )
}
