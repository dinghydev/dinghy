import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MICROPHONE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.microphone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 80,
  _original_height: 96,
}

export function Microphone(props: NodeProps) {
  return (
    <Shape {...MICROPHONE} {...props} _style={extendStyle(MICROPHONE, props)} />
  )
}
