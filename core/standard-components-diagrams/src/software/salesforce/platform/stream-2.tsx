import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STREAM_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.stream2;',
  _width: 60,
  _height: 60,
}

export function Stream2(props: DiagramNodeProps) {
  return (
    <Shape {...STREAM_2} {...props} _style={extendStyle(STREAM_2, props)} />
  )
}
