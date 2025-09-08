import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LEGACY_CLOUD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.legacy_cloud',
  },
  _original_width: 100,
  _original_height: 69,
}

export function LegacyCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...LEGACY_CLOUD}
      {...props}
      _style={extendStyle(LEGACY_CLOUD, props)}
    />
  )
}
