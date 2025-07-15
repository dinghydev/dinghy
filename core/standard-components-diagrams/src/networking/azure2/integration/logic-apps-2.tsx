import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGIC_APPS_2 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/internet_of_things/Logic_Apps.svg;',
  _width: 68,
  _height: 68,
}

export function LogicApps2(props: DiagramNodeProps) {
  return <Shape {...LOGIC_APPS_2} {...props} />
}
