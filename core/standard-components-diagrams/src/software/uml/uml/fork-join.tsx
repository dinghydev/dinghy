import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORK_JOIN = {
  _style: {
    entity: 'shape=line;html=1;strokeWidth=6;strokeColor=#ff0000;',
  },
  _original_width: 0,
  _original_height: 80,
}

export function ForkJoin(props: DiagramNodeProps) {
  return (
    <Shape {...FORK_JOIN} {...props} _style={extendStyle(FORK_JOIN, props)} />
  )
}
