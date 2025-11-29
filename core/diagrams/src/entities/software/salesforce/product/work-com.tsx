import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORK_COM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.work_com;',
  },
  _original_width: 60,
  _original_height: 58.8,
}

export function WorkCom(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORK_COM)} />
}
