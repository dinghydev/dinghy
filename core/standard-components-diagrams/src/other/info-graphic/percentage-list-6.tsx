import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERCENTAGE_LIST_6 = {
  _style:
    'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#FAD9D5;strokeColor=none;',
  _width: 7,
  _height: 190,
}

export function PercentageList6(props: DiagramNodeProps) {
  return <Shape {...PERCENTAGE_LIST_6} {...props} />
}
