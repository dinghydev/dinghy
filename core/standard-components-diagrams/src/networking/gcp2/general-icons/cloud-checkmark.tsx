import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_CHECKMARK = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_checkmark',
  },
  _original_width: 100,
  _original_height: 67,
}

export function CloudCheckmark(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CHECKMARK}
      {...props}
      _style={extendStyle(CLOUD_CHECKMARK, props)}
    />
  )
}
