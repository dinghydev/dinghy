import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEGMENTS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.segments2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Segments2(props: NodeProps) {
  return (
    <Shape {...SEGMENTS_2} {...props} _style={extendStyle(SEGMENTS_2, props)} />
  )
}
