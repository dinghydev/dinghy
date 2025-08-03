import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_FILTERING = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Data_Filtering_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function DataFiltering(props: DiagramNodeProps) {
  return <Shape {...DATA_FILTERING} {...props} />
}
