import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_VNIC = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.service_vnic;',
  _width: 56.8,
  _height: 54,
}

export function ServiceVnic(props: DiagramNodeProps) {
  return <Shape {...SERVICE_VNIC} {...props} />
}
