import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_LIST = {
  _style:
    'html=1;whiteSpace=wrap;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;rounded=0;',
  _width: 0,
  _height: 220,
}

export function ArrowList(props: DiagramNodeProps) {
  return <Shape {...ARROW_LIST} {...props} />
}
