import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAIL = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.mail;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 75,
}

export function Mail(props: NodeProps) {
  return <Shape {...MAIL} {...props} _style={extendStyle(MAIL, props)} />
}
