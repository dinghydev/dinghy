import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRAPH = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Graph_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Graph(props: DiagramNodeProps) {
  return <Shape {...GRAPH} {...props} _style={extendStyle(GRAPH, props)} />
}
