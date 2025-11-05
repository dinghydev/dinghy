import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOOP_LIMIT = {
  _style: {
    entity: 'shape=loopLimit;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 80,
}

export function LoopLimit(props: NodeProps) {
  return (
    <Shape {...LOOP_LIMIT} {...props} _style={extendStyle(LOOP_LIMIT, props)} />
  )
}
