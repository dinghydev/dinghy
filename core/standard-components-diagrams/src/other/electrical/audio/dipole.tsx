import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIPOLE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.dipole;pointerEvents=1;',
  _width: 100,
  _height: 40,
}

export function Dipole(props: DiagramNodeProps) {
  return <Shape {...DIPOLE} {...props} _style={extendStyle(DIPOLE, props)} />
}
