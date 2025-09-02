import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORK_COM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.work_com;',
  },
  _original_width: 60,
  _original_height: 58.8,
}

export function WorkCom(props: DiagramNodeProps) {
  return (
    <Shape {...WORK_COM} {...props} _style={extendStyle(WORK_COM, props)} />
  )
}
