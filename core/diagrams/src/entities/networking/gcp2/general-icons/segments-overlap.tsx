import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEGMENTS_OVERLAP = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.segments_overlap',
  },
  _original_width: 100,
  _original_height: 100,
}

export function SegmentsOverlap(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEGMENTS_OVERLAP)} />
}
