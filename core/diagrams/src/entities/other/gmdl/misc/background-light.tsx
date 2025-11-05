import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKGROUND_LIGHT = {
  _style: {
    entity: 'shape=rect;fillColor=#eeeeee;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function BackgroundLight(props: NodeProps) {
  return (
    <Shape
      {...BACKGROUND_LIGHT}
      {...props}
      _style={extendStyle(BACKGROUND_LIGHT, props)}
    />
  )
}
