import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLUSTER_SERVER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/cluster_server.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function ClusterServer(props: DiagramNodeProps) {
  return <Shape {...CLUSTER_SERVER} {...props} />
}
