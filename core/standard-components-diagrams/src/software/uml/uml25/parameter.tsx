import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARAMETER = {
  _style: {
    entity: 'html=1;',
  },
  _width: 0,
  _height: 40,
}

export function Parameter(props: DiagramNodeProps) {
  return (
    <Shape {...PARAMETER} {...props} _style={extendStyle(PARAMETER, props)} />
  )
}
