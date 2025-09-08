import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.star',
  },
  _original_width: 100,
  _original_height: 95,
}

export function Star(props: DiagramNodeProps) {
  return <Shape {...STAR} {...props} _style={extendStyle(STAR, props)} />
}
