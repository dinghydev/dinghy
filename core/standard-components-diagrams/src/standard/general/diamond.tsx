import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIAMOND = {
  _style: {
    entity: 'rhombus;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Diamond(props: DiagramNodeProps) {
  return <Shape {...DIAMOND} {...props} _style={extendStyle(DIAMOND, props)} />
}
