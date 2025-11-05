import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_PRIMARY_4 = {
  _style: {
    entity:
      'rounded=1;fillColor=#0057D8;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#ffffff;align=center;verticalAlign=middle;fontStyle=0;fontSize=12;sketch=0;',
  },
  _width: 86,
  _height: 33,
}

export function ButtonPrimary4(props: NodeProps) {
  return (
    <Shape
      {...BUTTON_PRIMARY_4}
      {...props}
      _style={extendStyle(BUTTON_PRIMARY_4, props)}
    />
  )
}
