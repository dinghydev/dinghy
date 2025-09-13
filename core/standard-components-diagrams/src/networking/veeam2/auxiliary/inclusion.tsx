import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INCLUSION = {
  _style: {
    entity:
      'triangle;whiteSpace=wrap;html=1;gradientColor=#D3D3D3;strokeColor=none;gradientDirection=east;',
  },
  _width: 40,
  _height: 160,
}

export function Inclusion(props: DiagramNodeProps) {
  return (
    <Shape {...INCLUSION} {...props} _style={extendStyle(INCLUSION, props)} />
  )
}
