import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FULLSCREEN_DIALOG = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
}

export function FullscreenDialog(props: DiagramNodeProps) {
  return (
    <Shape
      {...FULLSCREEN_DIALOG}
      {...props}
      _style={extendStyle(FULLSCREEN_DIALOG, props)}
    />
  )
}
