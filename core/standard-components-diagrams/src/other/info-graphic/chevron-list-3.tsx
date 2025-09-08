import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST_3 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#10739E;strokeColor=none;fontSize=17;fontColor=#FFFFFF;fontStyle=1;align=center;rounded=0;',
  },
  _original_width: 0,
  _original_height: 420,
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
