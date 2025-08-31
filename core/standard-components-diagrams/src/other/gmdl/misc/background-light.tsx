import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKGROUND_LIGHT = {
  _style: {
    entity: 'shape=rect;fillColor=#eeeeee;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
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
