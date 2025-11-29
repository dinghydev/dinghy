import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HTTP2_PROTOCOL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.http2_protocol;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Http2Protocol(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HTTP2_PROTOCOL)} />
}
