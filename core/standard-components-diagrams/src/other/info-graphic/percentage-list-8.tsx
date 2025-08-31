import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERCENTAGE_LIST_8 = {
  _style:
    'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#BAC8D3;strokeColor=none;',
  _width: 10,
  _height: 190,
}

export function PercentageList8(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_8}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_8, props)}
    />
  )
}
