import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHEVRON_LIST_4 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#F2931E;strokeColor=none;fontSize=17;fontColor=#FFFFFF;fontStyle=1;align=center;rounded=0;',
  },
  _width: 1,
  _height: 420,
}

export function ChevronList4(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_4}
      {...props}
      _style={extendStyle(CHEVRON_LIST_4, props)}
    />
  )
}
