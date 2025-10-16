import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TOPIC = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.topic_2;fillColor=#D9A741;gradientColor=none;',
  },
  _width: 93,
  _height: 58.5,
}

export function Topic(props: DiagramNodeProps) {
  return <Shape {...TOPIC} {...props} _style={extendStyle(TOPIC, props)} />
}
