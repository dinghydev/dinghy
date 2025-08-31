import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPOT_INSTANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.spot_instance;fillColor=#F58534;gradientColor=none;',
  },
  _width: 60,
  _height: 63,
}

export function SpotInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPOT_INSTANCE}
      {...props}
      _style={extendStyle(SPOT_INSTANCE, props)}
    />
  )
}
