import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTANCE_WITH_CLOUDWATCH = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.instance_with_cloudwatch;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function InstanceWithCloudwatch(props: NodeProps) {
  return (
    <Shape
      {...INSTANCE_WITH_CLOUDWATCH}
      {...props}
      _style={extendStyle(INSTANCE_WITH_CLOUDWATCH, props)}
    />
  )
}
