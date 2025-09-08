import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PN_DIODE = {
  _style: {
    entity:
      'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.diode;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function PnDiode(props: DiagramNodeProps) {
  return (
    <Shape {...PN_DIODE} {...props} _style={extendStyle(PN_DIODE, props)} />
  )
}
