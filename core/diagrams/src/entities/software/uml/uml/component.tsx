import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT = {
  _style: {
    entity: 'html=1;dropTarget=0;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 90,
}

export function Component(props: NodeProps) {
  return (
    <Shape {...COMPONENT} {...props} _style={extendStyle(COMPONENT, props)} />
  )
}
