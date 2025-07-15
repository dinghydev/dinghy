import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NON_CACHED_VOLUME = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.non_cached_volume;fillColor=#E05243;gradientColor=none;',
  _width: 60,
  _height: 73.5,
}

export function NonCachedVolume(props: DiagramNodeProps) {
  return <Shape {...NON_CACHED_VOLUME} {...props} />
}
