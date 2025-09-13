import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST_6 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#23445D;strokeColor=none;fontSize=17;fontColor=#FFFFFF;fontStyle=1;align=center;rounded=0;',
  },
  _width: 3,
  _height: 420,
}

export function ChevronList6(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_6}
      {...props}
      _style={extendStyle(CHEVRON_LIST_6, props)}
    />
  )
}
