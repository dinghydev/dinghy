import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERCENTAGE_LIST = {
  _style:
    'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#4A5768;strokeColor=none;fontSize=16;fontColor=#ffffff;fontStyle=1;rounded=0;',
  _width: 0,
  _height: 190,
}

export function PercentageList(props: DiagramNodeProps) {
  return <Shape {...PERCENTAGE_LIST} {...props} />
}
