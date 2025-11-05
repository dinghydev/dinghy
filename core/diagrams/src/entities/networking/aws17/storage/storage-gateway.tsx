import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_GATEWAY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.storage_gateway;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function StorageGateway(props: NodeProps) {
  return (
    <Shape
      {...STORAGE_GATEWAY}
      {...props}
      _style={extendStyle(STORAGE_GATEWAY, props)}
    />
  )
}
