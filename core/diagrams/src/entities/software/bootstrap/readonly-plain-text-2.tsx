import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const READONLY_PLAIN_TEXT_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;',
  },
  _width: 1,
  _height: 90,
}

export function ReadonlyPlainText2(props: NodeProps) {
  return (
    <Shape
      {...READONLY_PLAIN_TEXT_2}
      {...props}
      _style={extendStyle(READONLY_PLAIN_TEXT_2, props)}
    />
  )
}
