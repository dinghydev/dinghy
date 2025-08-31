import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEGMENTS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.segments;',
  _width: 60,
  _height: 60,
}

export function Segments(props: DiagramNodeProps) {
  return (
    <Shape {...SEGMENTS} {...props} _style={extendStyle(SEGMENTS, props)} />
  )
}
