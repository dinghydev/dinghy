import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VMWARE_HOST = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.vmware_host;',
  _width: 108,
  _height: 104,
}

export function VmwareHost(props: DiagramNodeProps) {
  return <Shape {...VMWARE_HOST} {...props} />
}
