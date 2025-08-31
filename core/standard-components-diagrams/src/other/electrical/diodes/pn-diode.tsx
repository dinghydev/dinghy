import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PN_DIODE = {
  _style:
    'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.diode;',
  _width: 100,
  _height: 60,
}

export function PnDiode(props: DiagramNodeProps) {
  return (
    <Shape {...PN_DIODE} {...props} _style={extendStyle(PN_DIODE, props)} />
  )
}
