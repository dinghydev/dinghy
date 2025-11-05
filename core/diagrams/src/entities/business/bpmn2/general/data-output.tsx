import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_OUTPUT = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=output;',
  },
  _width: 40,
  _height: 60,
}

export function DataOutput(props: NodeProps) {
  return (
    <Shape
      {...DATA_OUTPUT}
      {...props}
      _style={extendStyle(DATA_OUTPUT, props)}
    />
  )
}
