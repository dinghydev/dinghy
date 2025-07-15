import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPRESSOR_ROTARY = {
  _style:
    'shape=mxgraph.pid.compressors_-_iso.compressor_(rotary);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function CompressorRotary(props: DiagramNodeProps) {
  return <Shape {...COMPRESSOR_ROTARY} {...props} />
}
