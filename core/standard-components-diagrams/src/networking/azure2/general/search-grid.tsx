import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEARCH_GRID = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Search_Grid.svg;',
  _width: 68,
  _height: 67,
}

export function SearchGrid(props: DiagramNodeProps) {
  return <Shape {...SEARCH_GRID} {...props} />
}
