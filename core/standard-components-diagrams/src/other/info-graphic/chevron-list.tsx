import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#10739E;strokeColor=none;fontSize=17;fontStyle=1;align=center;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function ChevronList(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST}
      {...props}
      _style={extendStyle(CHEVRON_LIST, props)}
    />
  )
}
