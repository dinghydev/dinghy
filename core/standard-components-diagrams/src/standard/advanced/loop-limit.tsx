import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOOP_LIMIT = {
  _style: {
    entity: 'shape=loopLimit;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function LoopLimit(props: DiagramNodeProps) {
  return (
    <Shape {...LOOP_LIMIT} {...props} _style={extendStyle(LOOP_LIMIT, props)} />
  )
}
