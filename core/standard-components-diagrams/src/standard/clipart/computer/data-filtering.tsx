import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_FILTERING = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Data_Filtering_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function DataFiltering(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_FILTERING}
      {...props}
      _style={extendStyle(DATA_FILTERING, props)}
    />
  )
}
