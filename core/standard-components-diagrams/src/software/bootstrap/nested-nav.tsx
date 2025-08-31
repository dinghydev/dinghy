import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NESTED_NAV = {
  _style: {
    entity:
      'fillColor=#F8F9FA;strokeColor=none;align=left;fontSize=14;fontColor=#323232;',
  },
  _width: 0,
  _height: 330,
}

export function NestedNav(props: DiagramNodeProps) {
  return (
    <Shape {...NESTED_NAV} {...props} _style={extendStyle(NESTED_NAV, props)} />
  )
}
