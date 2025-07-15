import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_CROSSBAR = {
  _style: 'shape=crossbar;whiteSpace=wrap;html=1;rounded=1;',
  _width: 120,
  _height: 20,
}

export function HorizontalCrossbar(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_CROSSBAR} {...props} />
}
