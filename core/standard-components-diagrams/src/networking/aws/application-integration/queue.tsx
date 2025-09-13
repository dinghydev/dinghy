import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUEUE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.queue;',
  },
  _width: 78,
  _height: 47,
}

export function Queue(props: DiagramNodeProps) {
  return <Shape {...QUEUE} {...props} _style={extendStyle(QUEUE, props)} />
}
