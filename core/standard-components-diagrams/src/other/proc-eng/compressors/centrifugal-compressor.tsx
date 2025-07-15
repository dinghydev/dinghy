import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGAL_COMPRESSOR = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.centrifugal_compressor',
  _width: 70,
  _height: 70,
}

export function CentrifugalCompressor(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGAL_COMPRESSOR} {...props} />
}
