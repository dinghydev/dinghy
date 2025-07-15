import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_COMPRESSOR = {
  _style:
    'shape=mxgraph.pid.pumps.gas_compressor;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 55,
}

export function GasCompressor(props: DiagramNodeProps) {
  return <Shape {...GAS_COMPRESSOR} {...props} />
}
