import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGIC_APPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Logic_Apps.svg;',
  _width: 50,
  _height: 39,
}

export function LogicApps(props: DiagramNodeProps) {
  return <Shape {...LOGIC_APPS} {...props} />
}
