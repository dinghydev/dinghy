import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ZENER_DIODE_1 = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.zener_diode_1;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function ZenerDiode1(props: DiagramNodeProps) {
  return (
    <Shape
      {...ZENER_DIODE_1}
      {...props}
      _style={extendStyle(ZENER_DIODE_1, props)}
    />
  )
}
