import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LABEL_1 = {
  _style: 'label;whiteSpace=wrap;html=1;image=img/clipart/Gear_128x128.png',
  _width: 140,
  _height: 60,
}

export function Label1(props: DiagramNodeProps) {
  return <Shape {...LABEL_1} {...props} />
}
