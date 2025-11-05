import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.mail2;strokeColor=#999999;',
  },
  _width: 100,
  _height: 60,
}

export function Mail(props: NodeProps) {
  return <Shape {...MAIL} {...props} _style={extendStyle(MAIL, props)} />
}
