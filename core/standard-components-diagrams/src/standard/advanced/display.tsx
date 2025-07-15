import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISPLAY = {
  _style: 'shape=display;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 40,
}

export function Display(props: DiagramNodeProps) {
  return <Shape {...DISPLAY} {...props} />
}
