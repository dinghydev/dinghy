import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON = {
  _style: {
    entity: 'ellipse;html=1;whiteSpace=wrap;',
  },
  _original_width: 50,
  _original_height: 25,
}

export function Icon(props: DiagramNodeProps) {
  return <Shape {...ICON} {...props} _style={extendStyle(ICON, props)} />
}
