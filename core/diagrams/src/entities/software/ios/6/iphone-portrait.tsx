import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPHONE_PORTRAIT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPhone;bgStyle=bgGreen;fillColor=#aaaaaa;sketch=0;',
  },
  _width: 200,
  _height: 400,
}

export function IphonePortrait(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IPHONE_PORTRAIT)} />
}
