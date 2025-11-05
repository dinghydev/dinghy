import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENDPOINTS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.endpoints;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function Endpoints(props: NodeProps) {
  return (
    <Shape {...ENDPOINTS} {...props} _style={extendStyle(ENDPOINTS, props)} />
  )
}
