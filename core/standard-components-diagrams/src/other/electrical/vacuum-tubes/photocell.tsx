import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHOTOCELL = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.thermionic_devices.photocell;',
  _width: 70,
  _height: 87,
}

export function Photocell(props: DiagramNodeProps) {
  return <Shape {...PHOTOCELL} {...props} />
}
