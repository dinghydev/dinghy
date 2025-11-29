import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPAD_BACKGROUND_WHITE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iBgFlat;strokeColor=#18211b;',
  },
  _width: 175,
  _height: 280,
}

export function IpadBackgroundWhite(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IPAD_BACKGROUND_WHITE)} />
}
