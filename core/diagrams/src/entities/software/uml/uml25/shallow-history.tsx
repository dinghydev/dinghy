import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHALLOW_HISTORY = {
  _style: {
    entity: 'ellipse;html=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function ShallowHistory(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHALLOW_HISTORY}
      {...props}
      _style={extendStyle(SHALLOW_HISTORY, props)}
    />
  )
}
