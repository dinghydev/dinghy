import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL687A_ARUBA_8400X_32Y_32P_1_10_25G_SFP_SFP_SFP28_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl687a_aruba_8400x_32y_32p_1_10_25g_sfp_sfpplus_sfp28_module;',
  },
  _width: 14,
  _height: 107,
}

export function Jl687aAruba8400x32y32p11025gSfpSfpSfp28Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL687A_ARUBA_8400X_32Y_32P_1_10_25G_SFP_SFP_SFP28_MODULE}
      {...props}
      _style={extendStyle(
        JL687A_ARUBA_8400X_32Y_32P_1_10_25G_SFP_SFP_SFP28_MODULE,
        props,
      )}
    />
  )
}
