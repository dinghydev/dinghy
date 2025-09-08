import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIBRE_CHANNEL_FABRIC_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.fibre_channel_fabric_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 101,
  _original_height: 74,
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
