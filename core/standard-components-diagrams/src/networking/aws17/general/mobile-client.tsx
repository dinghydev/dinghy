import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_CLIENT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mobile_client;fillColor=#D2D3D3;gradientColor=none;',
  },
  _original_width: 40.5,
  _original_height: 63,
}

export function MobileClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_CLIENT}
      {...props}
      _style={extendStyle(MOBILE_CLIENT, props)}
    />
  )
}
