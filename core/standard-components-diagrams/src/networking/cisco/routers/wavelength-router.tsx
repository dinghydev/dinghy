import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAVELENGTH_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.wavelength_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 77,
  _height: 50,
}

export function WavelengthRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...WAVELENGTH_ROUTER}
      {...props}
      _style={extendStyle(WAVELENGTH_ROUTER, props)}
    />
  )
}
