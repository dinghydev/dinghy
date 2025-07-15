import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPRESSOR_VACUUM_PUMP = {
  _style:
    'shape=mxgraph.pid.compressors_-_iso.compressor,_vacuum_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function CompressorVacuumPump(props: DiagramNodeProps) {
  return <Shape {...COMPRESSOR_VACUUM_PUMP} {...props} />
}
