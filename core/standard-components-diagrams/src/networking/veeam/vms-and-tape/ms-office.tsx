import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MS_OFFICE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.ms_office;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function MsOffice(props: DiagramNodeProps) {
  return (
    <Shape {...MS_OFFICE} {...props} _style={extendStyle(MS_OFFICE, props)} />
  )
}
