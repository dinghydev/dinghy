import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.service_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 53,
}

export function ServiceRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_ROUTER}
      {...props}
      _style={extendStyle(SERVICE_ROUTER, props)}
    />
  )
}
