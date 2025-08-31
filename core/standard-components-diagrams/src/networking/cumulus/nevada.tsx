import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEVADA = {
  _style: {
    entity: 'fillColor=#515D68;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function Nevada(props: DiagramNodeProps) {
  return <Shape {...NEVADA} {...props} _style={extendStyle(NEVADA, props)} />
}
