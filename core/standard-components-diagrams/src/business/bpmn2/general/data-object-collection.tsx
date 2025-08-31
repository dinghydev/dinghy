import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_OBJECT_COLLECTION = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;bpmnTransferType=none;isCollection=1;',
  },
  _width: 40,
  _height: 60,
}

export function DataObjectCollection(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_OBJECT_COLLECTION}
      {...props}
      _style={extendStyle(DATA_OBJECT_COLLECTION, props)}
    />
  )
}
