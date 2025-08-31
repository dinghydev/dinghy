import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NMOS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.nmos;pointerEvents=1;',
  },
  _width: 60,
  _height: 100,
}

export function Nmos2(props: DiagramNodeProps) {
  return <Shape {...NMOS_2} {...props} _style={extendStyle(NMOS_2, props)} />
}
