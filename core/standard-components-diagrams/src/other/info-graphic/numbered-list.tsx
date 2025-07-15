import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NUMBERED_LIST = {
  _style:
    'shape=rect;rounded=1;whiteSpace=wrap;html=1;shadow=0;strokeColor=none;fillColor=#64BBE2;arcSize=30;fontSize=14;spacingLeft=42;fontStyle=1;fontColor=#FFFFFF;align=left;',
  _width: 0,
  _height: 320,
}

export function NumberedList(props: DiagramNodeProps) {
  return <Shape {...NUMBERED_LIST} {...props} />
}
