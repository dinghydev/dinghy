import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMM_LINK = {
  _style:
    'html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.comm_link_edge;html=1;',
  _width: 100,
  _height: 100,
}

export function CommLink(props: DiagramNodeProps) {
  return <Dependency {...COMM_LINK} {...props} />
}
