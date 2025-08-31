import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARAMETER = {
  _style: 'html=1;',
  _width: 0,
  _height: 40,
}

export function Parameter(props: DiagramNodeProps) {
  return (
    <Shape {...PARAMETER} {...props} _style={extendStyle(PARAMETER, props)} />
  )
}
