import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TETRODE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.tetrode;',
  _width: 70,
  _height: 77,
}

export function Tetrode(props: DiagramNodeProps) {
  return <Shape {...TETRODE} {...props} />
}
