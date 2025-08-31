import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Logic_Apps.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 52,
}

export function LogicApps(props: DiagramNodeProps) {
  return (
    <Shape {...LOGIC_APPS} {...props} _style={extendStyle(LOGIC_APPS, props)} />
  )
}
