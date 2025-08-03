import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGIC_APPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Logic_Apps.svg;strokeColor=none;',
  _width: 67,
  _height: 52,
}

export function LogicApps(props: DiagramNodeProps) {
  return <Shape {...LOGIC_APPS} {...props} />
}
