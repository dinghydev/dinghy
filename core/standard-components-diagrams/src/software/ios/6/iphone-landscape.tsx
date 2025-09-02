import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPHONE_LANDSCAPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPhone;direction=north;bgStyle=bgGreen;fillColor=#aaaaaa;sketch=0;',
  },
  _original_width: 400,
  _original_height: 200,
}

export function IphoneLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPHONE_LANDSCAPE}
      {...props}
      _style={extendStyle(IPHONE_LANDSCAPE, props)}
    />
  )
}
