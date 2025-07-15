import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_OBJECT = {
  _style:
    'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;',
  _width: 40,
  _height: 60,
}

export function DataObject(props: DiagramNodeProps) {
  return <Shape {...DATA_OBJECT} {...props} />
}
