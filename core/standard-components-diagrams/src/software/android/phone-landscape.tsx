import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHONE_LANDSCAPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.phone2;strokeColor=#c0c0c0;direction=south;',
  },
  _width: 390,
  _height: 200,
}

export function PhoneLandscape(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHONE_LANDSCAPE}
      {...props}
      _style={extendStyle(PHONE_LANDSCAPE, props)}
    />
  )
}
