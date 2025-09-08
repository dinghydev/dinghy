import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9840A_MSM_775ZL_V2_ZL_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9840a_msm_775zl_v2_zl_module;',
  },
  _original_width: 75,
  _original_height: 15,
}

export function J9840aMsm775zlV2ZlModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9840A_MSM_775ZL_V2_ZL_MODULE}
      {...props}
      _style={extendStyle(J9840A_MSM_775ZL_V2_ZL_MODULE, props)}
    />
  )
}
