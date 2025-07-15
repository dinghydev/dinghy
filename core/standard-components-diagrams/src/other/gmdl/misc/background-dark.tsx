import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKGROUND_DARK = {
  _style: 'shape=rect;fillColor=#333333;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function BackgroundDark(props: DiagramNodeProps) {
  return <Shape {...BACKGROUND_DARK} {...props} />
}
