import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHEVRON_LIST_7 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#12AAB5;strokeColor=none;fontSize=17;fontColor=#FFFFFF;fontStyle=1;align=center;rounded=0;',
  },
  _width: 4,
  _height: 420,
}

export function ChevronList7(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_7}
      {...props}
      _style={extendStyle(CHEVRON_LIST_7, props)}
    />
  )
}
