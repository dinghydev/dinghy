import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUBLIC_CLOUD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.public_cloud;',
  },
  _original_width: 101,
  _original_height: 81,
}

export function PublicCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUBLIC_CLOUD}
      {...props}
      _style={extendStyle(PUBLIC_CLOUD, props)}
    />
  )
}
