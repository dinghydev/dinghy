import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FULLSCREEN_DIALOG = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function FullscreenDialog(props: DiagramNodeProps) {
  return <Shape {...FULLSCREEN_DIALOG} {...props} />
}
