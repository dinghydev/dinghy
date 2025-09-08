import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STREAM_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.stream2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Stream2(props: DiagramNodeProps) {
  return (
    <Shape {...STREAM_2} {...props} _style={extendStyle(STREAM_2, props)} />
  )
}
