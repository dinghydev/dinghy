import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HIERARCHY = {
  _style: {
    entity: 'rounded=1;absoluteArcSize=1;html=1;arcSize=10;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function Hierarchy(props: DiagramNodeProps) {
  return (
    <Shape {...HIERARCHY} {...props} _style={extendStyle(HIERARCHY, props)} />
  )
}
