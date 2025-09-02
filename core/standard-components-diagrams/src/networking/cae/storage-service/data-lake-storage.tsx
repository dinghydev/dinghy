import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_LAKE_STORAGE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake_Storage.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function DataLakeStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_LAKE_STORAGE}
      {...props}
      _style={extendStyle(DATA_LAKE_STORAGE, props)}
    />
  )
}
