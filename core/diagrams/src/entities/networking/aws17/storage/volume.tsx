import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOLUME = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.volume;fillColor=#E05243;gradientColor=none;',
  },
  _width: 52.5,
  _height: 75,
}

export function Volume(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VOLUME)} />
}
