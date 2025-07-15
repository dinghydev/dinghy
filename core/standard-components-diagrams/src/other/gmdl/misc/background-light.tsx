import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKGROUND_LIGHT = {
  _style: 'shape=rect;fillColor=#eeeeee;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function BackgroundLight(props: DiagramNodeProps) {
  return <Shape {...BACKGROUND_LIGHT} {...props} />
}
