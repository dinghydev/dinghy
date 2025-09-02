import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEGMENTS = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.segments',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Segments(props: DiagramNodeProps) {
  return (
    <Shape {...SEGMENTS} {...props} _style={extendStyle(SEGMENTS, props)} />
  )
}
