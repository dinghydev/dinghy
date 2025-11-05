import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARAMETER = {
  _style: {
    entity: 'html=1;',
  },
  _width: 0,
  _height: 40,
}

export function Parameter(props: NodeProps) {
  return (
    <Shape {...PARAMETER} {...props} _style={extendStyle(PARAMETER, props)} />
  )
}
