import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INLINE_DIALOG_3 = {
  _style:
    'rounded=1;fillColor=none;strokeColor=none;shadow=0;html=1;arcSize=50;fontSize=12;align=left;verticalAlign=middle;spacingLeft=10',
  _width: 1,
  _height: 450,
}

export function InlineDialog3(props: DiagramNodeProps) {
  return <Shape {...INLINE_DIALOG_3} {...props} />
}
