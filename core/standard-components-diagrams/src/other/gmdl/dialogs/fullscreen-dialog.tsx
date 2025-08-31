import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FULLSCREEN_DIALOG = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
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
