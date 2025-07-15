import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKBOOKS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Azure_Workbooks.svg;',
  _width: 68,
  _height: 68,
}

export function Workbooks(props: DiagramNodeProps) {
  return <Shape {...WORKBOOKS} {...props} />
}
