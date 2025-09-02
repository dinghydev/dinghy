import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_MESSAGING = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_messaging',
  },
  _original_width: 100,
  _original_height: 64,
}

export function CloudMessaging(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_MESSAGING}
      {...props}
      _style={extendStyle(CLOUD_MESSAGING, props)}
    />
  )
}
