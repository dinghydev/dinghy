import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_WITH_ATTRIBUTES = {
  _style: {
    entity: 'align=left;overflow=fill;html=1;dropTarget=0;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 90,
}

export function ComponentWithAttributes(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_WITH_ATTRIBUTES)} />
  )
}
