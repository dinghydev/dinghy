import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_OUTPUT = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=output;',
  },
  _original_width: 40,
  _original_height: 60,
}

export function DataOutput(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_OUTPUT}
      {...props}
      _style={extendStyle(DATA_OUTPUT, props)}
    />
  )
}
