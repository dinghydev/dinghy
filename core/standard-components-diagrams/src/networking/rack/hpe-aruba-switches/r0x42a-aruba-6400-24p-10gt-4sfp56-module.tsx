import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R0X42A_ARUBA_6400_24P_10GT_4SFP56_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x42a_aruba_6400_24p_10gt_4sfp56_module;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function R0x42aAruba640024p10gt4sfp56Module(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X42A_ARUBA_6400_24P_10GT_4SFP56_MODULE}
      {...props}
      _style={extendStyle(R0X42A_ARUBA_6400_24P_10GT_4SFP56_MODULE, props)}
    />
  )
}
