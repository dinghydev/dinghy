import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAIL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.mail;',
  },
  _width: 30,
  _height: 16.5,
}

export function Mail(props: NodeProps) {
  return <Shape {...MAIL} {...props} _style={extendStyle(MAIL, props)} />
}
