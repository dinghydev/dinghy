import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PENTODE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.pentode;',
  _width: 70,
  _height: 77,
}

export function Pentode(props: DiagramNodeProps) {
  return <Shape {...PENTODE} {...props} _style={extendStyle(PENTODE, props)} />
}
