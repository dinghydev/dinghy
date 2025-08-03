import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGIC_APPS_2 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Logic_Apps.svg;strokeColor=none;',
  _width: 67,
  _height: 52,
}

export function LogicApps2(props: DiagramNodeProps) {
  return <Shape {...LOGIC_APPS_2} {...props} />
}
