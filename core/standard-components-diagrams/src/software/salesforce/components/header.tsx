import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEADER = {
  _style: {
    entity: 'strokeColor=none;fillColor=#d9d9d9;',
  },
  _original_width: 0,
  _original_height: 160,
}

export function Header(props: DiagramNodeProps) {
  return <Shape {...HEADER} {...props} _style={extendStyle(HEADER, props)} />
}
