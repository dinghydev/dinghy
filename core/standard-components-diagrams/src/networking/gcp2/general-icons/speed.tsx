import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPEED = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.speed',
  },
  _original_width: 100,
  _original_height: 57,
}

export function Speed(props: DiagramNodeProps) {
  return <Shape {...SPEED} {...props} _style={extendStyle(SPEED, props)} />
}
