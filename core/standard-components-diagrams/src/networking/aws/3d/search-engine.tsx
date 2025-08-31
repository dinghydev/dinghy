import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH_ENGINE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.searchEngine;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 180,
  _height: 192,
}

export function SearchEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEARCH_ENGINE}
      {...props}
      _style={extendStyle(SEARCH_ENGINE, props)}
    />
  )
}
