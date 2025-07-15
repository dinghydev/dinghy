import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NESTED_NAV = {
  _style:
    'fillColor=#F8F9FA;strokeColor=none;align=left;fontSize=14;fontColor=#323232;',
  _width: 0,
  _height: 330,
}

export function NestedNav(props: DiagramNodeProps) {
  return <Shape {...NESTED_NAV} {...props} />
}
