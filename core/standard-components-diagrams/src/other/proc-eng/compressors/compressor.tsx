import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPRESSOR = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.compressor',
  _width: 100,
  _height: 100,
}

export function Compressor(props: DiagramNodeProps) {
  return <Shape {...COMPRESSOR} {...props} />
}
