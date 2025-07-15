import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPRESSOR_RING = {
  _style:
    'shape=mxgraph.pid.compressors_-_iso.compressor_(ring);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function CompressorRing(props: DiagramNodeProps) {
  return <Shape {...COMPRESSOR_RING} {...props} />
}
