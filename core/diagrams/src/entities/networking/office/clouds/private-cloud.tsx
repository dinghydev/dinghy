import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRIVATE_CLOUD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.private_cloud;',
  },
  _width: 94,
  _height: 55,
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
