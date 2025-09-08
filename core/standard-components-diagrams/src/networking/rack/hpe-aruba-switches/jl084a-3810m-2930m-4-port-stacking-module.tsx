import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL084A_3810M_2930M_4_PORT_STACKING_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl084a_3810m_2930m_4_port_stacking_module;',
  },
  _original_width: 82,
  _original_height: 15,
}

export function Jl084a3810m2930m4PortStackingModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL084A_3810M_2930M_4_PORT_STACKING_MODULE}
      {...props}
      _style={extendStyle(JL084A_3810M_2930M_4_PORT_STACKING_MODULE, props)}
    />
  )
}
