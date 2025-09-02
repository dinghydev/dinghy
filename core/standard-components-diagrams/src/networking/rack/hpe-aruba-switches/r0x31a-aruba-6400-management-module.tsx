import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R0X31A_ARUBA_6400_MANAGEMENT_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x31a_aruba_6400_management_module;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function R0x31aAruba6400ManagementModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X31A_ARUBA_6400_MANAGEMENT_MODULE}
      {...props}
      _style={extendStyle(R0X31A_ARUBA_6400_MANAGEMENT_MODULE, props)}
    />
  )
}
