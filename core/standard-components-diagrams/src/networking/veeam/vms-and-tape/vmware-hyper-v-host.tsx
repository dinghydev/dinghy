import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VMWARE_HYPER_V_HOST = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.hyper_v_vmware_host;',
  _width: 108,
  _height: 104,
}

export function VmwareHyperVHost(props: DiagramNodeProps) {
  return (
    <Shape
      {...VMWARE_HYPER_V_HOST}
      {...props}
      _style={extendStyle(VMWARE_HYPER_V_HOST, props)}
    />
  )
}
