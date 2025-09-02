import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIPOLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.dipole;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function Dipole(props: DiagramNodeProps) {
  return <Shape {...DIPOLE} {...props} _style={extendStyle(DIPOLE, props)} />
}
