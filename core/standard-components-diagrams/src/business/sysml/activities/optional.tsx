import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPTIONAL = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function Optional(props: DiagramNodeProps) {
  return (
    <Shape {...OPTIONAL} {...props} _style={extendStyle(OPTIONAL, props)} />
  )
}
