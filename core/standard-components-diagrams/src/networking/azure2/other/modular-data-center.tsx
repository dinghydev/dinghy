import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODULAR_DATA_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Modular_Data_Center.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
