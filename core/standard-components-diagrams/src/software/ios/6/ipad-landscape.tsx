import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD_LANDSCAPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPad;direction=north;bgStyle=bgGreen;fillColor=#aaaaaa;sketch=0;',
  },
  _original_width: 625,
  _original_height: 484.99999999999994,
}

export function IpadLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPAD_LANDSCAPE}
      {...props}
      _style={extendStyle(IPAD_LANDSCAPE, props)}
    />
  )
}
