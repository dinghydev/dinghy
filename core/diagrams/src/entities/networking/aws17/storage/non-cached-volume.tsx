import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NON_CACHED_VOLUME = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.non_cached_volume;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 73.5,
}

export function NonCachedVolume(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NON_CACHED_VOLUME)} />
}
