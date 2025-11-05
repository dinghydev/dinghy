import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.service;',
  },
  _original_width: 33.2,
  _original_height: 33.2,
}

export function Service(props: NodeProps) {
  return <Shape {...SERVICE} {...props} _style={extendStyle(SERVICE, props)} />
}
