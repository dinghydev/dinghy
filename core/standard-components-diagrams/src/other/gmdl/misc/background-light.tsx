import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKGROUND_LIGHT = {
  _style: {
    entity: 'shape=rect;fillColor=#eeeeee;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
}

export function BackgroundLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKGROUND_LIGHT}
      {...props}
      _style={extendStyle(BACKGROUND_LIGHT, props)}
    />
  )
}
