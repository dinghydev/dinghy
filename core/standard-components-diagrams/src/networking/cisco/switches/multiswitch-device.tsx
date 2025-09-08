import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTISWITCH_DEVICE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.multiswitch_device;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 101,
  _original_height: 64,
}

export function MultiswitchDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTISWITCH_DEVICE}
      {...props}
      _style={extendStyle(MULTISWITCH_DEVICE, props)}
    />
  )
}
