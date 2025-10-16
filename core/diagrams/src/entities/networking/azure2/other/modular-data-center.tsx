import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODULAR_DATA_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Modular_Data_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ModularDataCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODULAR_DATA_CENTER}
      {...props}
      _style={extendStyle(MODULAR_DATA_CENTER, props)}
    />
  )
}
