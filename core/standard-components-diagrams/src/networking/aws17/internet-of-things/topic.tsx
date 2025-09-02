import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOPIC = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.topic;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 49.5,
  _original_height: 66,
}

export function Topic(props: DiagramNodeProps) {
  return <Shape {...TOPIC} {...props} _style={extendStyle(TOPIC, props)} />
}
