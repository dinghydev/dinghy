import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CACHED_VOLUME = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cached_volume;fillColor=#E05243;gradientColor=none;',
  _width: 60,
  _height: 73.5,
}

export function CachedVolume(props: DiagramNodeProps) {
  return <Shape {...CACHED_VOLUME} {...props} />
}
