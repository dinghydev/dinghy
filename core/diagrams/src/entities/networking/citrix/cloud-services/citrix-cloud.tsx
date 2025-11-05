import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CITRIX_CLOUD = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_cloud;',
  },
  _width: 50,
  _height: 36.17,
}

export function CitrixCloud(props: NodeProps) {
  return (
    <Shape
      {...CITRIX_CLOUD}
      {...props}
      _style={extendStyle(CITRIX_CLOUD, props)}
    />
  )
}
