import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_GRID = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Search_Grid.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67,
}

export function SearchGrid(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEARCH_GRID)} />
}
