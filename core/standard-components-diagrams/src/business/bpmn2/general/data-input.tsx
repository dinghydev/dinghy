import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_INPUT = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=input;',
  },
  _original_width: 40,
  _original_height: 60,
}

export function DataInput(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_INPUT} {...props} _style={extendStyle(DATA_INPUT, props)} />
  )
}
