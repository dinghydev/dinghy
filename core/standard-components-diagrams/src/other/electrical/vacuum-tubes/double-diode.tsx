import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_DIODE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.double_diode;',
  _width: 70,
  _height: 77,
}

export function DoubleDiode(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_DIODE} {...props} />
}
