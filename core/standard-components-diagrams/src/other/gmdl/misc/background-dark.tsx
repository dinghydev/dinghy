import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKGROUND_DARK = {
  _style: {
    entity: 'shape=rect;fillColor=#333333;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
}

export function BackgroundDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKGROUND_DARK}
      {...props}
      _style={extendStyle(BACKGROUND_DARK, props)}
    />
  )
}
