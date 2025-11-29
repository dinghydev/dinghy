import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EMAIL = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.anchor;align=right;spacingRight=2;fontColor=#666666;',
  },
  _width: 400,
  _height: 300,
}

export function Email(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EMAIL)} />
}
