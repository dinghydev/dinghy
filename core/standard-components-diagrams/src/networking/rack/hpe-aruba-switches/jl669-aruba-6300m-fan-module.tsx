import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL669_ARUBA_6300M_FAN_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl669_aruba_6300m_fan_module;',
  },
  _original_width: 41,
  _original_height: 13,
}

export function Jl669Aruba6300mFanModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL669_ARUBA_6300M_FAN_MODULE}
      {...props}
      _style={extendStyle(JL669_ARUBA_6300M_FAN_MODULE, props)}
    />
  )
}
