import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DROP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.drop',
  },
  _width: 70,
  _height: 100,
}

export function Drop(props: DiagramNodeProps) {
  return <Shape {...DROP} {...props} _style={extendStyle(DROP, props)} />
}
