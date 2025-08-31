import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_PRIVATE_CLOUD = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.virtual_private_cloud;fillColor=#F58534;gradientColor=none;',
  },
  _width: 79.5,
  _height: 54,
}

export function VirtualPrivateCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_PRIVATE_CLOUD}
      {...props}
      _style={extendStyle(VIRTUAL_PRIVATE_CLOUD, props)}
    />
  )
}
