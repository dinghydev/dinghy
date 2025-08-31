import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R0X38A_ARUBA_6400_48P_1GBE_CLS4_POE_MODULE = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x38a_aruba_6400_48p_1gbe_cls4_poe_module;',
  _width: 142,
  _height: 15,
}

export function R0x38aAruba640048p1gbeCls4PoeModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X38A_ARUBA_6400_48P_1GBE_CLS4_POE_MODULE}
      {...props}
      _style={extendStyle(R0X38A_ARUBA_6400_48P_1GBE_CLS4_POE_MODULE, props)}
    />
  )
}
