import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_APPS_2 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/internet_of_things/Logic_Apps.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function LogicApps2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_APPS_2}
      {...props}
      _style={extendStyle(LOGIC_APPS_2, props)}
    />
  )
}
