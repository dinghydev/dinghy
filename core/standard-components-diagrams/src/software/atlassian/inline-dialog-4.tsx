import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INLINE_DIALOG_4 = {
  _style:
    'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;html=1;arcSize=1;fontFamily=Verdana;fontSize=14;fontColor=#000000;align=left;',
  _width: 2,
  _height: 450,
}

export function InlineDialog4(props: DiagramNodeProps) {
  return <Shape {...INLINE_DIALOG_4} {...props} />
}
