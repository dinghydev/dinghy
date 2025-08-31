import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_ENGINE_CACHE_DIRECTOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.directors.content_engine_(cache_director);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 64,
}

export function ContentEngineCacheDirector(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_ENGINE_CACHE_DIRECTOR}
      {...props}
      _style={extendStyle(CONTENT_ENGINE_CACHE_DIRECTOR, props)}
    />
  )
}
