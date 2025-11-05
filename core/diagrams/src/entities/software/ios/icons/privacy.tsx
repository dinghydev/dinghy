import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVACY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.privacy;',
  },
  _width: 16.8,
  _height: 28.5,
}

export function Privacy(props: NodeProps) {
  return <Shape {...PRIVACY} {...props} _style={extendStyle(PRIVACY, props)} />
}
