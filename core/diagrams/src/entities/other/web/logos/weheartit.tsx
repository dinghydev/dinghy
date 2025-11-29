import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEHEARTIT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.weheartit;fillColor=#FF4577;strokeColor=none',
  },
  _original_width: 82.2,
  _original_height: 69.60000000000001,
}

export function Weheartit(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WEHEARTIT)} />
}
