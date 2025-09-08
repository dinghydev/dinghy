import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELLIPSE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function Ellipse(props: DiagramNodeProps) {
  return <Shape {...ELLIPSE} {...props} _style={extendStyle(ELLIPSE, props)} />
}
