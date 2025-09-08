import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPRESSOR_ROLLER_VANE = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(roller_vane);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function CompressorRollerVane(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_ROLLER_VANE}
      {...props}
      _style={extendStyle(COMPRESSOR_ROLLER_VANE, props)}
    />
  )
}
