import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const R0X39A_ARUBA_6400_48P_1GBE_CLS4_POE_4SFP56_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x39a_aruba_6400_48p_1gbe_cls4_poe_4sfp56_module;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function R0x39aAruba640048p1gbeCls4Poe4sfp56Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...R0X39A_ARUBA_6400_48P_1GBE_CLS4_POE_4SFP56_MODULE}
      {...props}
      _style={extendStyle(
        R0X39A_ARUBA_6400_48P_1GBE_CLS4_POE_4SFP56_MODULE,
        props,
      )}
    />
  )
}
