import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_BOX = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Box.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 68,
}

export function DataBox(props: NodeProps) {
  return (
    <Shape {...DATA_BOX} {...props} _style={extendStyle(DATA_BOX, props)} />
  )
}
