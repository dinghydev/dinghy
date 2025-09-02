import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INCLUSION = {
  _style: {
    entity:
      'triangle;whiteSpace=wrap;html=1;gradientColor=#D3D3D3;strokeColor=none;gradientDirection=east;',
  },
  _original_width: 40,
  _original_height: 160,
}

export function Inclusion(props: DiagramNodeProps) {
  return (
    <Shape {...INCLUSION} {...props} _style={extendStyle(INCLUSION, props)} />
  )
}
