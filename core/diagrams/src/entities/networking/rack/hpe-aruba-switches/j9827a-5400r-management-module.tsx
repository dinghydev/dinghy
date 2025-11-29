import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9827A_5400R_MANAGEMENT_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9827a_5400r_management_module;',
  },
  _width: 98,
  _height: 15,
}

export function J9827a5400rManagementModule(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, J9827A_5400R_MANAGEMENT_MODULE)}
    />
  )
}
