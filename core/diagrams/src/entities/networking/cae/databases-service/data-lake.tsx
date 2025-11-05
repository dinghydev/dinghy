import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_LAKE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake.svg;strokeColor=none;',
  },
  _width: 38,
  _height: 50,
}

export function DataLake(props: NodeProps) {
  return (
    <Shape {...DATA_LAKE} {...props} _style={extendStyle(DATA_LAKE, props)} />
  )
}
