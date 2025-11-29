import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_OBJECT_COLLECTION = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=none;isCollection=1;',
  },
  _width: 40,
  _height: 60,
}

export function DataObjectCollection(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATA_OBJECT_COLLECTION)} />
  )
}
