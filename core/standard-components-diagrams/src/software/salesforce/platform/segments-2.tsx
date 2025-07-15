import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEGMENTS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.segments2;',
  _width: 60,
  _height: 60,
}

export function Segments2(props: DiagramNodeProps) {
  return <Shape {...SEGMENTS_2} {...props} />
}
