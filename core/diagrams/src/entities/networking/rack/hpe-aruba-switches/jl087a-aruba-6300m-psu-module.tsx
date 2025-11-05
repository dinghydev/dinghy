import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL087A_ARUBA_6300M_PSU_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl087a_aruba_6300m_psu_module;',
  },
  _width: 27,
  _height: 15,
}

export function Jl087aAruba6300mPsuModule(props: NodeProps) {
  return (
    <Shape
      {...JL087A_ARUBA_6300M_PSU_MODULE}
      {...props}
      _style={extendStyle(JL087A_ARUBA_6300M_PSU_MODULE, props)}
    />
  )
}
