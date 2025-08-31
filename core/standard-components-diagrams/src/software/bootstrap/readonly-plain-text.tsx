import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const READONLY_PLAIN_TEXT = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacing=15;',
  },
  _width: 0,
  _height: 90,
}

export function ReadonlyPlainText(props: DiagramNodeProps) {
  return (
    <Shape
      {...READONLY_PLAIN_TEXT}
      {...props}
      _style={extendStyle(READONLY_PLAIN_TEXT, props)}
    />
  )
}
