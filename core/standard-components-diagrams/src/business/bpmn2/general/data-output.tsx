import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_OUTPUT = {
  _style:
    'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=output;',
  _width: 40,
  _height: 60,
}

export function DataOutput(props: DiagramNodeProps) {
  return <Shape {...DATA_OUTPUT} {...props} />
}
