import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRIFUGAL_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.centrifugal_compressor',
  },
  _width: 60,
  _height: 60,
}

export function CentrifugalCompressor(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGAL_COMPRESSOR}
      {...props}
      _style={extendStyle(CENTRIFUGAL_COMPRESSOR, props)}
    />
  )
}
