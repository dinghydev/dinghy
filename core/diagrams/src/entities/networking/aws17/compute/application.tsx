import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.application;fillColor=#F58534;gradientColor=none;',
  },
  _width: 34.5,
  _height: 64.5,
}

export function Application(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPLICATION)} />
}
