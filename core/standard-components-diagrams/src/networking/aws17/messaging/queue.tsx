import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUEUE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.queue;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 48,
}

export function Queue(props: DiagramNodeProps) {
  return <Shape {...QUEUE} {...props} _style={extendStyle(QUEUE, props)} />
}
