import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SORT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.sort;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Sort(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SORT)} />
}
