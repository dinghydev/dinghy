import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL070A_2530_8_POE_INTERNAL_PS_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl070a_2530_8_poeplus_internal_ps_switch;',
  },
  _width: 82,
  _height: 15,
}

export function Jl070a25308PoeInternalPsSwitch(props: NodeProps) {
  return (
    <Shape
      {...JL070A_2530_8_POE_INTERNAL_PS_SWITCH}
      {...props}
      _style={extendStyle(JL070A_2530_8_POE_INTERNAL_PS_SWITCH, props)}
    />
  )
}
