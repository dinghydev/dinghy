import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLIENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.client;aspect=fixed;strokeColor=none;fillColor=#777777;',
  },
  _width: 60,
  _height: 104,
}

export function Client(props: DiagramNodeProps) {
  return <Shape {...CLIENT} {...props} _style={extendStyle(CLIENT, props)} />
}
