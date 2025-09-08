import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRIVATE_CLOUD = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.private_cloud;',
  },
  _original_width: 50,
  _original_height: 28.865000000000002,
}

export function PrivateCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_CLOUD}
      {...props}
      _style={extendStyle(PRIVATE_CLOUD, props)}
    />
  )
}
