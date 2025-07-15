import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MODULAR_DATA_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Modular_Data_Center.svg;',
  _width: 68,
  _height: 68,
}

export function ModularDataCenter(props: DiagramNodeProps) {
  return <Shape {...MODULAR_DATA_CENTER} {...props} />
}
