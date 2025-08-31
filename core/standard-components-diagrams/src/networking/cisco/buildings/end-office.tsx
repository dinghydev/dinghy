import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const END_OFFICE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.buildings.end_office;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 54,
  _height: 56,
}

export function EndOffice(props: DiagramNodeProps) {
  return (
    <Shape {...END_OFFICE} {...props} _style={extendStyle(END_OFFICE, props)} />
  )
}
