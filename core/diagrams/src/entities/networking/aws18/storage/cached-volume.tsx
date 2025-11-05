import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CACHED_VOLUME = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cached_volume;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function CachedVolume(props: NodeProps) {
  return (
    <Shape
      {...CACHED_VOLUME}
      {...props}
      _style={extendStyle(CACHED_VOLUME, props)}
    />
  )
}
