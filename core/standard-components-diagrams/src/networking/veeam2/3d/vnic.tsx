import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VNIC = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vnic;',
  _width: 62,
  _height: 62,
}

export function Vnic(props: DiagramNodeProps) {
  return <Shape {...VNIC} {...props} />
}
