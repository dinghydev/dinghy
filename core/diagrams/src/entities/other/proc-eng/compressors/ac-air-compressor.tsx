import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AC_AIR_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.ac_air_compressor',
  },
  _width: 100,
  _height: 65,
}

export function AcAirCompressor(props: NodeProps) {
  return (
    <Shape
      {...AC_AIR_COMPRESSOR}
      {...props}
      _style={extendStyle(AC_AIR_COMPRESSOR, props)}
    />
  )
}
