import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKBOOKS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Workbooks.svg;strokeColor=none;',
  _width: 60,
  _height: 65,
}

export function Workbooks(props: DiagramNodeProps) {
  return <Shape {...WORKBOOKS} {...props} />
}
