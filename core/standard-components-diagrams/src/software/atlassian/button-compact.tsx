import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_COMPACT = {
  _style:
    'rounded=1;fillColor=#F1F2F4;align=center;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;fontSize=12;sketch=0;',
  _width: 0,
  _height: 33,
}

export function ButtonCompact(props: DiagramNodeProps) {
  return <Shape {...BUTTON_COMPACT} {...props} />
}
