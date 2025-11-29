import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILTER_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.filter_2;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Filter2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FILTER_2)} />
}
