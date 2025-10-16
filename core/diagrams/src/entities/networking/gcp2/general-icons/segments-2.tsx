import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEGMENTS_2 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.segments_2',
  },
  _original_width: 100,
  _original_height: 92,
}

export function Segments2(props: DiagramNodeProps) {
  return (
    <Shape {...SEGMENTS_2} {...props} _style={extendStyle(SEGMENTS_2, props)} />
  )
}
