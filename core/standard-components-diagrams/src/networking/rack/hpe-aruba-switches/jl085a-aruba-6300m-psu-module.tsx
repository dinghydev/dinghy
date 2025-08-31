import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL085A_ARUBA_6300M_PSU_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl085a_aruba_6300m_psu_module;',
  },
  _width: 27,
  _height: 13,
}

export function Jl085aAruba6300mPsuModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL085A_ARUBA_6300M_PSU_MODULE}
      {...props}
      _style={extendStyle(JL085A_ARUBA_6300M_PSU_MODULE, props)}
    />
  )
}
