import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEGMENTS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.segments;',
  _width: 60,
  _height: 60,
}

export function Segments(props: DiagramNodeProps) {
  return <Shape {...SEGMENTS} {...props} />
}
