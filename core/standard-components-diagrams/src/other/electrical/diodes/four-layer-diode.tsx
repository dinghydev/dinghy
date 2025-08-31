import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOUR_LAYER_DIODE = {
  _style:
    'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.four_layer_diode;',
  _width: 100,
  _height: 80,
}

export function FourLayerDiode(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOUR_LAYER_DIODE}
      {...props}
      _style={extendStyle(FOUR_LAYER_DIODE, props)}
    />
  )
}
