import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERCENTAGE_LIST_5 = {
  _style:
    'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#F2931E;strokeColor=none;shadow=0;',
  _width: 5,
  _height: 190,
}

export function PercentageList5(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_5}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_5, props)}
    />
  )
}
