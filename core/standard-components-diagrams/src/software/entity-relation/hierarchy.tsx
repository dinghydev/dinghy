import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HIERARCHY = {
  _style: 'rounded=1;absoluteArcSize=1;html=1;arcSize=10;',
  _width: 0,
  _height: 100,
}

export function Hierarchy(props: DiagramNodeProps) {
  return (
    <Shape {...HIERARCHY} {...props} _style={extendStyle(HIERARCHY, props)} />
  )
}
