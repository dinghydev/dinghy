import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLUSTER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.emr_cluster;fillColor=#F58534;gradientColor=none;',
  },
  _width: 55.5,
  _height: 63,
}

export function Cluster(props: DiagramNodeProps) {
  return <Shape {...CLUSTER} {...props} _style={extendStyle(CLUSTER, props)} />
}
