import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NON_CACHED_VOLUME = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.non_cached_volume;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 73.5,
}

export function NonCachedVolume(props: DiagramNodeProps) {
  return (
    <Shape
      {...NON_CACHED_VOLUME}
      {...props}
      _style={extendStyle(NON_CACHED_VOLUME, props)}
    />
  )
}
