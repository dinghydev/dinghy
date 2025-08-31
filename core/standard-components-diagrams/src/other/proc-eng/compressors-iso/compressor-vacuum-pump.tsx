import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPRESSOR_VACUUM_PUMP = {
  _style:
    'shape=mxgraph.pid.compressors_-_iso.compressor,_vacuum_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function CompressorVacuumPump(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_VACUUM_PUMP}
      {...props}
      _style={extendStyle(COMPRESSOR_VACUUM_PUMP, props)}
    />
  )
}
