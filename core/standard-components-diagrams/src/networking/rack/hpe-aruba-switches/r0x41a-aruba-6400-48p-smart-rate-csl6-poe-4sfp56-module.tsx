import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const R0X41A_ARUBA_6400_48P_SMART_RATE_CSL6_POE_4SFP56_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x41a_aruba_6400_48p_smart_rate_cls6_poe_4sfp56_module;',
  },
  _width: 142,
  _height: 15,
}

export function R0x41aAruba640048pSmartRateCsl6Poe4sfp56Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...R0X41A_ARUBA_6400_48P_SMART_RATE_CSL6_POE_4SFP56_MODULE}
      {...props}
      _style={extendStyle(
        R0X41A_ARUBA_6400_48P_SMART_RATE_CSL6_POE_4SFP56_MODULE,
        props,
      )}
    />
  )
}
