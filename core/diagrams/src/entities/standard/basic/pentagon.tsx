import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PENTAGON = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.pentagon',
  },
  _original_width: 100,
  _original_height: 90,
}

export function Pentagon(props: NodeProps) {
  return (
    <Shape {...PENTAGON} {...props} _style={extendStyle(PENTAGON, props)} />
  )
}
