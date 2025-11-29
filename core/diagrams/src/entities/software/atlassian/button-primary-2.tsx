import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUTTON_PRIMARY_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.checkbox;fillColor=#008465;strokeColor=none;html=1;sketch=0;',
  },
  _width: 1,
  _height: 33,
}

export function ButtonPrimary2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUTTON_PRIMARY_2)} />
}
