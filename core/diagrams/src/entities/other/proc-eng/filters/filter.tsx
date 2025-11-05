import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.filter;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Filter(props: NodeProps) {
  return <Shape {...FILTER} {...props} _style={extendStyle(FILTER, props)} />
}
