import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEGMENTS_OVERLAP = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.segments_overlap',
  _width: 100,
  _height: 100,
}

export function SegmentsOverlap(props: DiagramNodeProps) {
  return <Shape {...SEGMENTS_OVERLAP} {...props} />
}
