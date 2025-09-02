import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEGMENTS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.segments;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Segments(props: DiagramNodeProps) {
  return (
    <Shape {...SEGMENTS} {...props} _style={extendStyle(SEGMENTS, props)} />
  )
}
