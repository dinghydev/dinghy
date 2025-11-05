import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EYE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.eye;',
  },
  _width: 30,
  _height: 14.1,
}

export function Eye(props: NodeProps) {
  return <Shape {...EYE} {...props} _style={extendStyle(EYE, props)} />
}
