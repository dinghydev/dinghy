import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R0X44_ARUBA_6400_48P_10G_25G_SFP28_MODULE = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x44_aruba_6400_48p_10g_25g_sfp28_module;',
  _width: 142,
  _height: 15,
}

export function R0x44Aruba640048p10g25gSfp28Module(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X44_ARUBA_6400_48P_10G_25G_SFP28_MODULE}
      {...props}
      _style={extendStyle(R0X44_ARUBA_6400_48P_10G_25G_SFP28_MODULE, props)}
    />
  )
}
