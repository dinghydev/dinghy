import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMM_LINK = {
  _style: {
    dependency:
      'html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.comm_link_edge;html=1;',
  },
}

export function CommLink(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMM_LINK}
      {...props}
      _style={extendStyle(COMM_LINK, props)}
    />
  )
}
