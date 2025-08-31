import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIODE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.triode;',
  _width: 70,
  _height: 77,
}

export function Triode(props: DiagramNodeProps) {
  return <Shape {...TRIODE} {...props} _style={extendStyle(TRIODE, props)} />
}
