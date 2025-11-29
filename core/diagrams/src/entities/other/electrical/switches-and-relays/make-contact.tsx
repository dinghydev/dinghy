import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAKE_CONTACT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.make_contact;',
  },
  _width: 75,
  _height: 16,
}

export function MakeContact(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAKE_CONTACT)} />
}
