import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Search.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 65,
}

export function Search(props: DiagramNodeProps) {
  return <Shape {...SEARCH} {...props} _style={extendStyle(SEARCH, props)} />
}
