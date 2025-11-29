import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IN_LINE_ROTARY_MIXER = {
  _style: {
    entity:
      'shape=mxgraph.pid.mixers.in-line_rotary_mixer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 190,
  _height: 100,
}

export function InLineRotaryMixer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IN_LINE_ROTARY_MIXER)} />
}
