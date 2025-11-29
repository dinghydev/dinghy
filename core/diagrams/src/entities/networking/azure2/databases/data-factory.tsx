import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_FACTORY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Data_Factory.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DataFactory(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_FACTORY)} />
}
