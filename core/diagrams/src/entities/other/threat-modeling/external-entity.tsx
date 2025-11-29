import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTERNAL_ENTITY = {
  _style: {
    entity: 'rounded=0;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 60,
}

export function ExternalEntity(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXTERNAL_ENTITY)} />
}
