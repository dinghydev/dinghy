import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPAD_PORTRAIT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPad;bgStyle=bgGreen;fillColor=#aaaaaa;sketch=0;',
  },
  _width: 484.99999999999994,
  _height: 625,
}

export function IpadPortrait(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IPAD_PORTRAIT)} />
}
