import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLUSTER = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.cluster;',
  },
  _width: 102.8,
  _height: 49.2,
}

export function Cluster(props: DiagramNodeProps) {
  return <Shape {...CLUSTER} {...props} _style={extendStyle(CLUSTER, props)} />
}
