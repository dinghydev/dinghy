import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPRESSOR_CENTRIFUGAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(centrifugal);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function CompressorCentrifugal(props: NodeProps) {
  return (
    <Shape
      {...COMPRESSOR_CENTRIFUGAL}
      {...props}
      _style={extendStyle(COMPRESSOR_CENTRIFUGAL, props)}
    />
  )
}
