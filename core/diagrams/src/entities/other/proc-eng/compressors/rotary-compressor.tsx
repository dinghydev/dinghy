import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROTARY_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.rotary_compressor',
  },
  _width: 42,
  _height: 91,
}

export function RotaryCompressor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROTARY_COMPRESSOR)} />
}
