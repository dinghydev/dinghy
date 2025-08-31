import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLUSTER_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/cluster_server.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ClusterServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLUSTER_SERVER}
      {...props}
      _style={extendStyle(CLUSTER_SERVER, props)}
    />
  )
}
