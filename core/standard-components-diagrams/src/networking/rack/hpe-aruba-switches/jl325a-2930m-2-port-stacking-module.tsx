import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL325A_2930M_2_PORT_STACKING_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl325a_2930m_2_port_stacking_module;',
  },
  _original_width: 23,
  _original_height: 10,
}

export function Jl325a2930m2PortStackingModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL325A_2930M_2_PORT_STACKING_MODULE}
      {...props}
      _style={extendStyle(JL325A_2930M_2_PORT_STACKING_MODULE, props)}
    />
  )
}
