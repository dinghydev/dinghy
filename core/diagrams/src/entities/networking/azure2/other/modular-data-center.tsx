import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MODULAR_DATA_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Modular_Data_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ModularDataCenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MODULAR_DATA_CENTER)} />
}
