import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9990A_20P_GIGT_4P_SFP_MODULE = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9990a_20p_gigt_4p_sfpplus_module;',
  _width: 75,
  _height: 15,
}

export function J9990a20pGigt4pSfpModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9990A_20P_GIGT_4P_SFP_MODULE}
      {...props}
      _style={extendStyle(J9990A_20P_GIGT_4P_SFP_MODULE, props)}
    />
  )
}
