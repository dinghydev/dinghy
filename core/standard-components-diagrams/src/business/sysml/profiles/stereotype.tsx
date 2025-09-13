import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEREOTYPE = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function Stereotype(props: DiagramNodeProps) {
  return (
    <Shape {...STEREOTYPE} {...props} _style={extendStyle(STEREOTYPE, props)} />
  )
}
