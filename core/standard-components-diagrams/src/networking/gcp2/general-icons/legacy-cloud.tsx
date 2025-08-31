import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEGACY_CLOUD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.legacy_cloud',
  },
  _width: 100,
  _height: 69,
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
