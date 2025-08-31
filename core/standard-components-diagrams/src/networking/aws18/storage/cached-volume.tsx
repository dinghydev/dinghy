import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CACHED_VOLUME = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cached_volume;',
  _width: 60,
  _height: 60,
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
