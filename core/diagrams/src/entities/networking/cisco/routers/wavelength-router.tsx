import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAVELENGTH_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.wavelength_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 77,
  _height: 50,
}

export function WavelengthRouter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WAVELENGTH_ROUTER)} />
}
