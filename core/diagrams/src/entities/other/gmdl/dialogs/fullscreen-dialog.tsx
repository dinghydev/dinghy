import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FULLSCREEN_DIALOG = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function FullscreenDialog(props: NodeProps) {
  return (
    <Shape
      {...FULLSCREEN_DIALOG}
      {...props}
      _style={extendStyle(FULLSCREEN_DIALOG, props)}
    />
  )
}
