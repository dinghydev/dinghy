import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNET = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.internet;fillColor=#D2D3D3;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 79.5,
}

export function Internet(props: NodeProps) {
  return (
    <Shape {...INTERNET} {...props} _style={extendStyle(INTERNET, props)} />
  )
}
