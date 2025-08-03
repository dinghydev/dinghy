import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNIVERSAL_PRINT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Universal_Print.svg;strokeColor=none;',
  _width: 70,
  _height: 60,
}

export function UniversalPrint(props: DiagramNodeProps) {
  return <Shape {...UNIVERSAL_PRINT} {...props} />
}
