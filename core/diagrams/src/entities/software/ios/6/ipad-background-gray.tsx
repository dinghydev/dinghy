import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPAD_BACKGROUND_GRAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iBgFlat;strokeColor=#18211b;fillColor=#dddddd;',
  },
  _width: 175,
  _height: 280,
}

export function IpadBackgroundGray(props: NodeProps) {
  return (
    <Shape
      {...IPAD_BACKGROUND_GRAY}
      {...props}
      _style={extendStyle(IPAD_BACKGROUND_GRAY, props)}
    />
  )
}
