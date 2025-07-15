import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_TESTING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Load_Testing.svg;',
  _width: 68,
  _height: 65.2,
}

export function LoadTesting(props: DiagramNodeProps) {
  return <Shape {...LOAD_TESTING} {...props} />
}
