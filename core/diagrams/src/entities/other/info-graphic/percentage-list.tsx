import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST = {
  _style: {
    entity:
      'shape=step;perimeter=stepPerimeter;whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#4A5768;strokeColor=none;fontSize=16;fontColor=#ffffff;fontStyle=1;rounded=0;',
  },
  _width: 0,
  _height: 190,
}

export function PercentageList(props: NodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST, props)}
    />
  )
}
