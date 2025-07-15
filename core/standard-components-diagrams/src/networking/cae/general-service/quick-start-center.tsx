import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUICK_START_CENTER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Quick_Start_Center.svg;',
  _width: 50,
  _height: 50,
}

export function QuickStartCenter(props: DiagramNodeProps) {
  return <Shape {...QUICK_START_CENTER} {...props} />
}
