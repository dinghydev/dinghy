import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_COMPRESSOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.gas_compressor;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 55,
}

export function GasCompressor(props: DiagramNodeProps) {
  return (
    <Shape
      {...GAS_COMPRESSOR}
      {...props}
      _style={extendStyle(GAS_COMPRESSOR, props)}
    />
  )
}
