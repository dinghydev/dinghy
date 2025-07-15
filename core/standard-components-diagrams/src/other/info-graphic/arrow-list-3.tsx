import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_LIST_3 = {
  _style:
    'html=1;whiteSpace=wrap;fillColor=#F2931E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  _width: 2,
  _height: 220,
}

export function ArrowList3(props: DiagramNodeProps) {
  return <Shape {...ARROW_LIST_3} {...props} />
}
