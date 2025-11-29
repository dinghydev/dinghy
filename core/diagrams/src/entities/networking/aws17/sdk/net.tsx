import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NET = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#115193;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 84,
}

export function Net(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NET)} />
}
