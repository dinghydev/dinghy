import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.filter;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Filter(props: DiagramNodeProps) {
  return <Shape {...FILTER} {...props} _style={extendStyle(FILTER, props)} />
}
