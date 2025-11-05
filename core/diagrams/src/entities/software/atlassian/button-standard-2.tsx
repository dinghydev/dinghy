import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_STANDARD_2 = {
  _style: {
    entity:
      'rounded=1;fillColor=#F1F2F4;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;align=center;verticalAlign=middle;fontStyle=0;fontSize=12;sketch=0;',
  },
  _width: 86,
  _height: 33,
}

export function ButtonStandard2(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_STANDARD_2}
      {...props}
      _style={extendStyle(BUTTON_STANDARD_2, props)}
    />
  )
}
