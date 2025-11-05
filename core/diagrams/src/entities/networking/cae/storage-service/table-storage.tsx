import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLE_STORAGE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Table_Storage.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function TableStorage(props: NodeProps) {
  return (
    <Shape
      {...TABLE_STORAGE}
      {...props}
      _style={extendStyle(TABLE_STORAGE, props)}
    />
  )
}
