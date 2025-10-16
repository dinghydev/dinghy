import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9986A_24P_GIGT_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9986a_24p_gigt_module;',
  },
  _width: 75,
  _height: 15,
}

export function J9986a24pGigtModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9986A_24P_GIGT_MODULE}
      {...props}
      _style={extendStyle(J9986A_24P_GIGT_MODULE, props)}
    />
  )
}
