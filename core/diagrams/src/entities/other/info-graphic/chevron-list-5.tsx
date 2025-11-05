import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST_5 = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#AE4132;strokeColor=none;fontSize=17;fontColor=#FFFFFF;fontStyle=1;align=center;rounded=0;',
  },
  _width: 2,
  _height: 420,
}

export function ChevronList5(props: NodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_5}
      {...props}
      _style={extendStyle(CHEVRON_LIST_5, props)}
    />
  )
}
