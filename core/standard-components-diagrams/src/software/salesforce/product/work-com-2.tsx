import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORK_COM_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.work_com2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function WorkCom2(props: DiagramNodeProps) {
  return (
    <Shape {...WORK_COM_2} {...props} _style={extendStyle(WORK_COM_2, props)} />
  )
}
