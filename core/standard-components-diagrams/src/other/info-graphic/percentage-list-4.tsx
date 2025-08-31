import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERCENTAGE_LIST_4 = {
  _style: {
    entity:
      'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#FCE7CD;strokeColor=none;',
  },
  _width: 4,
  _height: 190,
}

export function PercentageList4(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_4}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_4, props)}
    />
  )
}
