import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERCENTAGE_LIST_3 = {
  _style:
    'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#10739E;strokeColor=none;shadow=0;',
  _width: 2,
  _height: 190,
}

export function PercentageList3(props: DiagramNodeProps) {
  return <Shape {...PERCENTAGE_LIST_3} {...props} />
}
