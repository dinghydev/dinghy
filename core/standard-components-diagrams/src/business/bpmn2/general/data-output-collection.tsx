import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_OUTPUT_COLLECTION = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=output;isCollection=1;',
  },
  _width: 40,
  _height: 60,
}

export function DataOutputCollection(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_OUTPUT_COLLECTION}
      {...props}
      _style={extendStyle(DATA_OUTPUT_COLLECTION, props)}
    />
  )
}
