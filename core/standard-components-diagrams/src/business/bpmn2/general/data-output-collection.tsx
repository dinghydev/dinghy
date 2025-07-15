import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_OUTPUT_COLLECTION = {
  _style:
    'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=output;isCollection=1;',
  _width: 40,
  _height: 60,
}

export function DataOutputCollection(props: DiagramNodeProps) {
  return <Shape {...DATA_OUTPUT_COLLECTION} {...props} />
}
