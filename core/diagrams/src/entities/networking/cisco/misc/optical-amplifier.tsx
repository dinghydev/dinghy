import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPTICAL_AMPLIFIER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.optical_amplifier;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 67,
  _original_height: 51,
}

export function OpticalAmplifier(props: NodeProps) {
  return (
    <Shape
      {...OPTICAL_AMPLIFIER}
      {...props}
      _style={extendStyle(OPTICAL_AMPLIFIER, props)}
    />
  )
}
