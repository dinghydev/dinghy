import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const R0X31A_ARUBA_6400_MANAGEMENT_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x31a_aruba_6400_management_module;',
  },
  _width: 142,
  _height: 15,
}

export function R0x31aAruba6400ManagementModule(props: NodeProps) {
  return (
    <Shape
      {...R0X31A_ARUBA_6400_MANAGEMENT_MODULE}
      {...props}
      _style={extendStyle(R0X31A_ARUBA_6400_MANAGEMENT_MODULE, props)}
    />
  )
}
