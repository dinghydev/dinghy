import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHADOWED_ROUTER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.shadowed_router;',
  _width: 60,
  _height: 60,
}

export function ShadowedRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHADOWED_ROUTER}
      {...props}
      _style={extendStyle(SHADOWED_ROUTER, props)}
    />
  )
}
