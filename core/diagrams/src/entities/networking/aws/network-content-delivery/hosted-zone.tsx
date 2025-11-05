import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOSTED_ZONE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.hosted_zone;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function HostedZone(props: NodeProps) {
  return (
    <Shape
      {...HOSTED_ZONE}
      {...props}
      _style={extendStyle(HOSTED_ZONE, props)}
    />
  )
}
