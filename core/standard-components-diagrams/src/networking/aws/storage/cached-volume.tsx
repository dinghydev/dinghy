import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CACHED_VOLUME = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cached_volume;',
  },
  _original_width: 62,
  _original_height: 78,
}

export function CachedVolume(props: DiagramNodeProps) {
  return (
    <Shape
      {...CACHED_VOLUME}
      {...props}
      _style={extendStyle(CACHED_VOLUME, props)}
    />
  )
}
