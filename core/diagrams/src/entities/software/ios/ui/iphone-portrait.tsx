import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPHONE_PORTRAIT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7.misc.iphone;strokeColor=#c0c0c0;',
  },
  _width: 200,
  _height: 400,
}

export function IphonePortrait(props: NodeProps) {
  return (
    <Shape
      {...IPHONE_PORTRAIT}
      {...props}
      _style={extendStyle(IPHONE_PORTRAIT, props)}
    />
  )
}
