import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LEGACY_CLOUD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.legacy_cloud',
  },
  _width: 100,
  _height: 69,
}

export function LegacyCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LEGACY_CLOUD)} />
}
