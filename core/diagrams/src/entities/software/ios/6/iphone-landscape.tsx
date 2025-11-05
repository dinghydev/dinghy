import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IPHONE_LANDSCAPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPhone;direction=north;bgStyle=bgGreen;fillColor=#aaaaaa;sketch=0;',
  },
  _width: 400,
  _height: 200,
}

export function IphoneLandscape(props: NodeProps) {
  return (
    <Shape
      {...IPHONE_LANDSCAPE}
      {...props}
      _style={extendStyle(IPHONE_LANDSCAPE, props)}
    />
  )
}
