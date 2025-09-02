import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HALF_BAKED = {
  _style: {
    entity: 'fillColor=#78CDD1;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function HalfBaked(props: DiagramNodeProps) {
  return (
    <Shape {...HALF_BAKED} {...props} _style={extendStyle(HALF_BAKED, props)} />
  )
}
