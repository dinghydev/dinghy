import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NMOS = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.mosfet_ic_n;',
  _width: 95,
  _height: 100,
}

export function Nmos(props: DiagramNodeProps) {
  return <Shape {...NMOS} {...props} _style={extendStyle(NMOS, props)} />
}
