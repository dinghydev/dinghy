import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPRESSOR_ROLLER_VANE = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(roller_vane);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
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
