import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL368A_ARUBA_8400_MGMT_MOD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl368a_aruba_8400_mgmt_mod;',
  },
  _width: 14,
  _height: 122,
}

export function Jl368aAruba8400MgmtMod(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL368A_ARUBA_8400_MGMT_MOD}
      {...props}
      _style={extendStyle(JL368A_ARUBA_8400_MGMT_MOD, props)}
    />
  )
}
