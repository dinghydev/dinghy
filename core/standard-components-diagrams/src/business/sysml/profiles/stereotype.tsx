import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEREOTYPE = {
  _style: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 80,
}

export function Stereotype(props: DiagramNodeProps) {
  return (
    <Shape {...STEREOTYPE} {...props} _style={extendStyle(STEREOTYPE, props)} />
  )
}
