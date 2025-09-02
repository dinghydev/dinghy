import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_LAKE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake.svg;strokeColor=none;',
  },
  _original_width: 38,
  _original_height: 50,
}

export function DataLake(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_LAKE} {...props} _style={extendStyle(DATA_LAKE, props)} />
  )
}
