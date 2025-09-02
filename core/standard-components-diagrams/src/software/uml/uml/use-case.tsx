import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USE_CASE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;',
  },
  _original_width: 140,
  _original_height: 70,
}

export function UseCase(props: DiagramNodeProps) {
  return (
    <Shape {...USE_CASE} {...props} _style={extendStyle(USE_CASE, props)} />
  )
}
