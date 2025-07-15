import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORK_COM_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.work_com2;',
  _width: 60,
  _height: 60,
}

export function WorkCom2(props: DiagramNodeProps) {
  return <Shape {...WORK_COM_2} {...props} />
}
