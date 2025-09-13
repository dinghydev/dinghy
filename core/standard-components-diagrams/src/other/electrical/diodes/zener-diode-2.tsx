import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ZENER_DIODE_2 = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.zener_diode_3;',
  },
  _width: 100,
  _height: 60,
}

export function ZenerDiode2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ZENER_DIODE_2}
      {...props}
      _style={extendStyle(ZENER_DIODE_2, props)}
    />
  )
}
