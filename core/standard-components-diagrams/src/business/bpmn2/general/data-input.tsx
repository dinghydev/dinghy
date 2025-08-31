import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_INPUT = {
  _style:
    'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=input;',
  _width: 40,
  _height: 60,
}

export function DataInput(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_INPUT} {...props} _style={extendStyle(DATA_INPUT, props)} />
  )
}
