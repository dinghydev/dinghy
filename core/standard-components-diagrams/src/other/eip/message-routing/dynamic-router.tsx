import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DYNAMIC_ROUTER = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.dynamic_router;',
  },
  _width: 150,
  _height: 90,
}

export function DynamicRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...DYNAMIC_ROUTER}
      {...props}
      _style={extendStyle(DYNAMIC_ROUTER, props)}
    />
  )
}
