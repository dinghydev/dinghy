import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHEVRON_LIST_3 = {
  _style:
    'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#10739E;strokeColor=none;fontSize=17;fontColor=#FFFFFF;fontStyle=1;align=center;rounded=0;',
  _width: 0,
  _height: 420,
}

export function ChevronList3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_3}
      {...props}
      _style={extendStyle(CHEVRON_LIST_3, props)}
    />
  )
}
