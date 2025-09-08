import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9995A_8P_SMART_RATE_POE_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9995a_8p_smart_rate_poeplus_module;',
  },
  _original_width: 75,
  _original_height: 15,
}

export function J9995a8pSmartRatePoeModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9995A_8P_SMART_RATE_POE_MODULE}
      {...props}
      _style={extendStyle(J9995A_8P_SMART_RATE_POE_MODULE, props)}
    />
  )
}
