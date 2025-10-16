import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMILEY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.smiley',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Smiley(props: DiagramNodeProps) {
  return <Shape {...SMILEY} {...props} _style={extendStyle(SMILEY, props)} />
}
