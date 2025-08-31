import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HALF_BAKED = {
  _style: 'fillColor=#78CDD1;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function HalfBaked(props: DiagramNodeProps) {
  return (
    <Shape {...HALF_BAKED} {...props} _style={extendStyle(HALF_BAKED, props)} />
  )
}
