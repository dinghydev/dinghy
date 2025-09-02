import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEREOTYPE = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 160,
  _original_height: 80,
}

export function Stereotype(props: DiagramNodeProps) {
  return (
    <Shape {...STEREOTYPE} {...props} _style={extendStyle(STEREOTYPE, props)} />
  )
}
