import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEART = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.heart',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Heart(props: NodeProps) {
  return <Shape {...HEART} {...props} _style={extendStyle(HEART, props)} />
}
