import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH_GRID = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Search_Grid.svg;strokeColor=none;',
  _width: 68,
  _height: 67,
}

export function SearchGrid(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEARCH_GRID}
      {...props}
      _style={extendStyle(SEARCH_GRID, props)}
    />
  )
}
