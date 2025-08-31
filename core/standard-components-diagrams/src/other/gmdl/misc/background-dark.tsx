import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKGROUND_DARK = {
  _style: {
    entity: 'shape=rect;fillColor=#333333;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
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
