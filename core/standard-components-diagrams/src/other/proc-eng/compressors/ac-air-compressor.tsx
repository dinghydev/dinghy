import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AC_AIR_COMPRESSOR = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.ac_air_compressor',
  _width: 100,
  _height: 65,
}

export function AcAirCompressor(props: DiagramNodeProps) {
  return <Shape {...AC_AIR_COMPRESSOR} {...props} />
}
