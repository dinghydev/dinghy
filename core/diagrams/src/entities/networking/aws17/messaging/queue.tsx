import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUEUE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.queue;fillColor=#D9A741;gradientColor=none;',
  },
  _width: 73.5,
  _height: 48,
}

export function Queue(props: NodeProps) {
  return <Shape {...QUEUE} {...props} _style={extendStyle(QUEUE, props)} />
}
