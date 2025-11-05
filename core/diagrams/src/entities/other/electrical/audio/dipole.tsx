import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIPOLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.dipole;pointerEvents=1;',
  },
  _width: 100,
  _height: 40,
}

export function Dipole(props: NodeProps) {
  return <Shape {...DIPOLE} {...props} _style={extendStyle(DIPOLE, props)} />
}
