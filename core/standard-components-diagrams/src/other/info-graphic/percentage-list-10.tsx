import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERCENTAGE_LIST_10 = {
  _style:
    'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#dddddd;strokeColor=none;rounded=0;',
  _width: 0,
  _height: 250,
}

export function PercentageList10(props: DiagramNodeProps) {
  return <Shape {...PERCENTAGE_LIST_10} {...props} />
}
