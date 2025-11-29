import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUBLIC_CLOUD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.public_cloud;',
  },
  _width: 101,
  _height: 81,
}

export function PublicCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PUBLIC_CLOUD)} />
}
