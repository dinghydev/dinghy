import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_LIST = {
  _style: {
    group:
      'shape=table;startSize=0;container=1;collapsible=0;childLayout=tableLayout;fontSize=11;fillColor=none;strokeColor=none;',
  },
}

export function VerticalList(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_LIST}
      {...props}
      _style={extendStyle(VERTICAL_LIST, props)}
    />
  )
}
