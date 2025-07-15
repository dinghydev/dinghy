import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLUSTER_SERVER = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.cluster_server',
  _width: 40,
  _height: 50,
}

export function ClusterServer(props: DiagramNodeProps) {
  return <Shape {...CLUSTER_SERVER} {...props} />
}
