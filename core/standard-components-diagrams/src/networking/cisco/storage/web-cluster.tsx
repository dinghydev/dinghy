import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_CLUSTER = {
  _style:
    'shape=mxgraph.cisco.storage.web_cluster;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 186,
  _height: 106,
}

export function WebCluster(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_CLUSTER}
      {...props}
      _style={extendStyle(WEB_CLUSTER, props)}
    />
  )
}
