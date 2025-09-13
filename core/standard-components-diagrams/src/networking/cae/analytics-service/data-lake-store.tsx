import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_LAKE_STORE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake_Store.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 39,
}

export function DataLakeStore(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_LAKE_STORE}
      {...props}
      _style={extendStyle(DATA_LAKE_STORE, props)}
    />
  )
}
