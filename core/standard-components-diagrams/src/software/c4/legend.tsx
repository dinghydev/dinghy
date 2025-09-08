import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LEGEND = {
  _style: {
    group:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;fontSize=16;align=left;verticalAlign=top;fillColor=none;strokeColor=none;fontColor=#4D4D4D;fontStyle=1;spacingLeft=6;spacing=0;resizable=0;',
    entity: {
      fontColor: '#4D4D4D',
    },
  },
}

export function Legend(props: DiagramNodeProps) {
  return <Shape {...LEGEND} {...props} _style={extendStyle(LEGEND, props)} />
}
