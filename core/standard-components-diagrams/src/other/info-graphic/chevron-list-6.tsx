import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHEVRON_LIST_6 = {
  _style:
    'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#23445D;strokeColor=none;fontSize=17;fontColor=#FFFFFF;fontStyle=1;align=center;rounded=0;',
  _width: 3,
  _height: 420,
}

export function ChevronList6(props: DiagramNodeProps) {
  return <Shape {...CHEVRON_LIST_6} {...props} />
}
