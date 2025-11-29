import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HYPERVISOR_XENSERVER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.hypervisor_xenserver;',
  },
  _width: 50,
  _height: 30.995,
}

export function HypervisorXenserver(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HYPERVISOR_XENSERVER)} />
}
