import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USE_CASE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;',
  },
  _width: 140,
  _height: 70,
}

export function UseCase(props: DiagramNodeProps) {
  return (
    <Shape {...USE_CASE} {...props} _style={extendStyle(USE_CASE, props)} />
  )
}
