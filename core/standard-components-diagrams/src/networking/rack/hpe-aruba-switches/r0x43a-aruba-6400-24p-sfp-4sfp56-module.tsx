import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const R0X43A_ARUBA_6400_24P_SFP_4SFP56_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x43a_aruba_6400_24p_sfp_4sfp56_module;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function R0x43aAruba640024pSfp4sfp56Module(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X43A_ARUBA_6400_24P_SFP_4SFP56_MODULE}
      {...props}
      _style={extendStyle(R0X43A_ARUBA_6400_24P_SFP_4SFP56_MODULE, props)}
    />
  )
}
