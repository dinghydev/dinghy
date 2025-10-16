import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTAINER = {
  _style: {
    entity: 'swimlane;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function Container(props: DiagramNodeProps) {
  return (
    <Shape {...CONTAINER} {...props} _style={extendStyle(CONTAINER, props)} />
  )
}
