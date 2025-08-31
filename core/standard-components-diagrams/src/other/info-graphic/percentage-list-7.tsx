import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERCENTAGE_LIST_7 = {
  _style:
    'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#AE4132;strokeColor=none;shadow=0;',
  _width: 8,
  _height: 190,
}

export function PercentageList7(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_7}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_7, props)}
    />
  )
}
