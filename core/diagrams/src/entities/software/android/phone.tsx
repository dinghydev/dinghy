import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.phone2;strokeColor=#c0c0c0;',
  },
  _width: 200,
  _height: 390,
}

export function Phone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHONE)} />
}
