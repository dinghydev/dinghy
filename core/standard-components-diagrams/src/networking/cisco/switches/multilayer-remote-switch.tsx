import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTILAYER_REMOTE_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.multilayer_remote_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 88,
}

export function MultilayerRemoteSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTILAYER_REMOTE_SWITCH}
      {...props}
      _style={extendStyle(MULTILAYER_REMOTE_SWITCH, props)}
    />
  )
}
