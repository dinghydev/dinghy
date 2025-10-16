import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RADIUS_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.radius_server;',
  },
  _original_width: 75.5,
  _original_height: 91,
}

export function RadiusServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIUS_SERVER}
      {...props}
      _style={extendStyle(RADIUS_SERVER, props)}
    />
  )
}
