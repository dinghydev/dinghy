import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_OBJECT = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.data2;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;size=15;html=1;',
  },
  _original_width: 40,
  _original_height: 60,
}

export function DataObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_OBJECT}
      {...props}
      _style={extendStyle(DATA_OBJECT, props)}
    />
  )
}
