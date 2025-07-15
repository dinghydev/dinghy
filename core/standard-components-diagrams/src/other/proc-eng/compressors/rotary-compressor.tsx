import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROTARY_COMPRESSOR = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.rotary_compressor',
  _width: 42,
  _height: 91,
}

export function RotaryCompressor(props: DiagramNodeProps) {
  return <Shape {...ROTARY_COMPRESSOR} {...props} />
}
