import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.cloud_service;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function CloudService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUD_SERVICE)} />
}
