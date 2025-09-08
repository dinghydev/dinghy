import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_LAYER_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.virtual_layer_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 86,
}

export function VirtualLayerSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_LAYER_SWITCH}
      {...props}
      _style={extendStyle(VIRTUAL_LAYER_SWITCH, props)}
    />
  )
}
