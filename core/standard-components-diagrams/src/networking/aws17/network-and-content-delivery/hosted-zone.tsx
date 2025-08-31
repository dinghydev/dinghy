import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOSTED_ZONE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.hosted_zone;fillColor=#F58536;gradientColor=none;',
  },
  _width: 63,
  _height: 64.5,
}

export function HostedZone(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOSTED_ZONE}
      {...props}
      _style={extendStyle(HOSTED_ZONE, props)}
    />
  )
}
