import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GRAPH = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Graph_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Graph(props: DiagramNodeProps) {
  return <Shape {...GRAPH} {...props} />
}
