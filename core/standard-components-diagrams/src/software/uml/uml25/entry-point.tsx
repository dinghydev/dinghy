import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTRY_POINT = {
  _style: {
    entity: 'ellipse;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function EntryPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRY_POINT}
      {...props}
      _style={extendStyle(ENTRY_POINT, props)}
    />
  )
}
