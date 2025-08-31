import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9857A_ADV_SVCS_V2_ZL_MODULE = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9857a_adv_svcs_v2_zl_module;',
  _width: 75,
  _height: 15,
}

export function J9857aAdvSvcsV2ZlModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9857A_ADV_SVCS_V2_ZL_MODULE}
      {...props}
      _style={extendStyle(J9857A_ADV_SVCS_V2_ZL_MODULE, props)}
    />
  )
}
