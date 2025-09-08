import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCROLLSPY = {
  _style: {
    entity:
      'fillColor=#F8F9FA;strokeColor=none;align=left;fontSize=14;spacing=10;',
  },
  _original_width: 0,
  _original_height: 300,
}

export function Scrollspy(props: DiagramNodeProps) {
  return (
    <Shape {...SCROLLSPY} {...props} _style={extendStyle(SCROLLSPY, props)} />
  )
}
