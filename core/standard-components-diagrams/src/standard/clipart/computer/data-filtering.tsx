import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_FILTERING = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Data_Filtering_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
