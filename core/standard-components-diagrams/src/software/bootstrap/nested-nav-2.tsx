import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NESTED_NAV_2 = {
  _style:
    'fillColor=none;strokeColor=none;align=left;fontSize=14;fontColor=#323232;html=1;whiteSpace=wrap;verticalAlign=top;spacingRight=25;',
  _width: 1,
  _height: 330,
}

export function NestedNav2(props: DiagramNodeProps) {
  return (
    <Shape
      {...NESTED_NAV_2}
      {...props}
      _style={extendStyle(NESTED_NAV_2, props)}
    />
  )
}
